const Joi = require('joi');

const ratingsParam = {
    body: {
        rating: Joi.number().max(5).required(),
    }
}

module.exports = { ratingsParam };