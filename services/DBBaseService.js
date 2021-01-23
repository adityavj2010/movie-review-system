const { db_read } = require("../config/db")

class DBBase {

    /**
     * @param {String} tableName The table name for we want to initialize the class
     */
    constructor(tableName) {
        this.tableName = tableName
    }

    create(body) {

    }

    findById(userId) {
        return new Promise((resolve, reject) => {

            db_read.query(`Select * from ${this.tableName} where id = ?`, userId, function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    reject(err, null);
                } else {
                    resolve(res[0]);
                }
            });

        });
    }

    find(params = {}) {
        const { limit = 5, offset = 0 } = params;
        delete params.limit
        delete params.offset
        let sqlAndSection = Object.keys(params).map(param => `'${param}'=?`).join(' AND ');
        let paramsArray = Object.values(params);
        let whereClause = ''
        if (paramsArray.length > 0) {
            whereClause = `where ${sqlAndSection}`
        }
        return new Promise((resolve, reject) => {
            db_read.query(`Select * from ${this.tableName} ${whereClause} LIMIT ${limit} OFFSET ${offset}`, paramsArray, function (err, res) {
                if (err) {
                    reject(err)
                } else {
                    let results = {
                        movies: res,
                        moreAvailable: res.length == limit
                    }
                    resolve(results)
                }
            });
        })
    }

    update(userId, body, result) {

    }

    delete(userId, result) {

    }

}



module.exports = { DBBase }