const { DBBase } = require("./DBBaseService");

class CommentsService extends DBBase {
    constructor() {
        super('comments')
    }

    findCommentsByMovieId(ctx) {
        const {mId,queryParams} = ctx;
        return this.find({ mId, ...queryParams }).then(data => {
            return {
                comments: data
            }
        })
    }

    create(ctx) {
        const {reqBody,mId,uId} = ctx
        return this.insertOne({...reqBody,mId,uId}).then(res => {
            return { id: res.insertId }
        })
    }

    edit(ctx) {
        const {reqBody,cId,uId} = ctx
        return this.findById(ctx.cId).then((comment)=>{
            if(comment.uId!==uId)
            {
                throw "Internal Server Error uId not matching"
            }
            return this.update(cId,reqBody)
        })
    }

    delete(ctx) {
        const {reqBody,cId,uId} = ctx
        return this.findById(ctx.cId).then((comment)=>{
            if(comment.uId!==uId)
            {
                throw "Internal Server Error uId not matching"
            }
            return super.delete(cId)
        })
    }
}

module.exports = new CommentsService()