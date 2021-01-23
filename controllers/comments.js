const commentsService = require("../services/CommentsService")

class CommentsController {

    /**
     * This function returns all the comments belonging to movie with Id mId
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     */
    getComments(req, res) {
        const mId = req.params['mId']
        commentsService.findByMovieId(mId, req.query).then((data) => {
            res.status(200).send(data)
        }).catch((error) => {
            res.status(500).send({ message: 'Internal Error' });
        })
    }

    /**
     * This function creates a comment
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     */
    createComment(req, res) {
        const mId = Number(req.params['mId'])
        const uId = req.user.id
        const reqBody = req.body
        console.warn(
            'BODY',reqBody
        )
        commentsService.createComment({mId,uId,...reqBody}).then((data)=>{
            res.status(200).send(data)
        }).catch((error) => {
            res.status(500).send({ message: 'Internal Error' });
        })
    }
}

module.exports = new CommentsController()