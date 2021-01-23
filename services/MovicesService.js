const { DBBase } = require("./DBBaseService");


class Movies extends DBBase {
    constructor() {
        super('movies')
    }
}

module.exports = new Movies()