const { DBBase } = require("./DBBaseService");

class CommentsService extends DBBase {
    constructor() {
        super('comments')
    }

    findByMovieId(mId, queryParams) {
        return this.find({ mId, ...queryParams }).then(data => {
            return {
                comments: data
            }
        })
    }

    createComment(body) {
        return this.insertOne(body).then(res => {
            return { id: res.insertId }
        })
    }
}

module.exports = new CommentsService()