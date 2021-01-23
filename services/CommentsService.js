const { DBBase } = require("./DBBaseService");

class CommentsService extends DBBase {
    constructor() {
        super('comments')
    }

    findByMovieId(mId,queryParams){
        return this.find({mId,...queryParams}).then(data=>{
            return {
                comments:data
            }
        })
    }
}

module.exports = new CommentsService()