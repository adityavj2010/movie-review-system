const commentsService = require("../services/CommentsService")
const { createCtx } = require("../utils/context")

class CommentsController {


    /**
     * This function returns all the comments belonging to movie with Id mId
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     */
    get(req, res) {
        const ctx = createCtx(req)
        commentsService.findCommentsByMovieId(ctx).then((data) => {
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
    create(req, res) {

        const ctx = createCtx(req)
        commentsService.create(ctx).then((data)=>{
            res.status(200).send(data)
        }).catch((error) => {
            res.status(500).send({ message: 'Internal Error' });
        })
    }

    edit(req,res) {
        const ctx = createCtx(req)
        commentsService.edit(ctx).then((data)=>{
            res.status(200).send({message:'Comment updated successfully'})
        }).catch((error) => {
            console.log('EDIT ERROR',error)
            res.status(500).send({ message: 'Internal Error' });
        })
    }

    delete(req,res) {
        const ctx = createCtx(req)
        commentsService.delete(ctx).then((data)=>{
            res.status(200).send({message:'Comment Deleted successfully'})
        }).catch((error) => {
            console.log('EDIT ERROR',error)
            res.status(500).send({ message: 'Internal Error' });
        })
    }
}

module.exports = new CommentsController()