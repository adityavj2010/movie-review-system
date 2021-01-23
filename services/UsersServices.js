'user strict';

const { DBBase } = require("./DBBaseService");

class User extends DBBase {
    constructor() {
        super('users')
    }
}
module.exports = new User();
