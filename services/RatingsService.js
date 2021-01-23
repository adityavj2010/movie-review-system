const { DBBase } = require("./DBBaseService");


class Ratings extends DBBase {
    constructor() {
        super('ratings')
    }

    addRating(ctx) {
        const { reqBody, mId, uId } = ctx;
        return this.readQuery(`SELECT * FROM ${this.tableName} WHERE mId=${mId} and uId=${uId}`).then((res) => {
            if (res.length === 1) {
                return this.writeQuery(`UPDATE ${this.tableName} SET rating=${Number(reqBody.rating)} WHERE uId=${uId} and mId=${mId}`)
            }
            else {
                return this.insertOne({ uId, mId, ...reqBody })
            }
        })
    }

    delete(ctx) {
        const { reqBody, mId, uId } = ctx;
        return this.writeQuery(`DELETE FROM ${this.tableName} WHERE uId=${uId} and mId=${mId}`)
    }
}

module.exports = new Ratings()