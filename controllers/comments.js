const commentsService = require("../services/CommentsService")

class CommentsController {
    getComments(req,res) {
        const mId = req.params['mId']
        commentsService.findByMovieId(mId,req.query).then((data)=>{
            res.status(200).send(data)
        }).catch((error)=>{
            res.status(500).send({message : 'Internal Error'});
        })      
}
}

module.exports = new CommentsController()