const { db_read, db_write } = require("../config/db")

class DBBase {

    /**
     * @param {String} tableName The table name for we want to initialize the class
     */
    constructor(tableName) {
        this.tableName = tableName
    }

    insertOne(model) {
        let keyString = `(${Object.keys(model).join(' ,')})`;
        let values = Object.values(model);
        let statement = `INSERT INTO ${this.tableName} ${keyString} VALUES ?`;
        return this.writeQuery(statement, [[values]])
    }

    findById(id) {
        return this.readQuery(`Select * from ${this.tableName} where id = ?`, id).then(res => res[0])
    }

    find(params = {}) {
        const { limit = 5, offset = 0 } = params;
        delete params.limit
        delete params.offset
        let sqlAndSection = Object.keys(params).map(param => {
            let checkType = '='
            if (typeof params[param]==='string') {
                checkType = "LIKE"
            }
            return `${param} ${checkType} ?`
        }).join(' AND ');
        let paramsArray = Object.values(params);
        let whereClause = ''
        if (paramsArray.length > 0) {
            whereClause = `where ${sqlAndSection}`
            console.log('WHERE CLAUSE',sqlAndSection)
        }
        return this.readQuery(`Select * from ${this.tableName} ${whereClause} LIMIT ${limit} OFFSET ${offset}`, paramsArray)
    }

    update(id, body) {
        let keyString = `${Object.keys(body).map((key => key + '=?')).join(' ,')}`;
        let values = Object.values(body);
        let statement = `UPDATE ${this.tableName} SET ${keyString} WHERE id=${id}`;
        return this.writeQuery(statement, values)
    }

    delete(id) {
        let statement = `DELETE FROM ${this.tableName} WHERE id=${id}`
        return this.writeQuery(statement)
    }

    readQuery(sql, values) {
        return new Promise((resolve, reject) => {
            db_read.query(sql, values, function (err, res) {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }

    writeQuery(sql, values) {
        return new Promise((resolve, reject) => {
            db_write.query(sql, values, function (err, res) {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }

}



module.exports = { DBBase }