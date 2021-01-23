const Joi = require('joi');

const commentParam = {
    body: {
        text: Joi.string().required(),
    }
}

module.exports = { commentParam };