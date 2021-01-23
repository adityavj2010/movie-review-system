const ratingsService = require("../services/RatingsService")
const { createCtx } = require("../utils/context")


class RatingsControler {
    addRating(req, res) {
        const ctx = createCtx(req)
        console.log('ADD RATING')
        ratingsService.addRating(ctx).then(() => {
            res.status(200).send({message:'success'})
        }).catch((error) => {
            console.error('ERROR',error)
            res.status(500).send({ message: 'Internal Error' });
        });
    }

    delete(req, res) {
        const ctx = createCtx(req)
        ratingsService.delete(ctx).then(()=>{
            res.status(200).send({message:'success'})
        }).catch((error) => {
            console.error('ERROR',error)
            res.status(500).send({ message: 'Internal Error' });
        });
    }
}

module.exports = new RatingsControler()
