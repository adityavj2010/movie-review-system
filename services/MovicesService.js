const { DBBase } = require("./DBBaseService");


class Movies extends DBBase {
    constructor() {
        super('movies')
    }

   

    findById(ctx) {
        const {mId,uId} = ctx
        const selectString = `movies.id,movies.title,movies.plot,movies.url,movies.cast,movies.genre,movies.release_date,movies.language,movies.aggregate,ratings.rating as rating`
        const statement = `SELECT ${selectString} FROM ${this.tableName} LEFT JOIN ratings on ratings.uId=${uId} and ratings.mId=movies.id WHERE movies.id=${mId}`;
        return this.readQuery(statement).then((res)=>res[0])
    }
}


module.exports = new Movies()