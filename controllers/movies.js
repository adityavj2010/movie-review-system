const MovicesService = require("../services/MovicesService");
const { createCtx } = require("../utils/context");

/** The main movies controller */
class MoviesController {
    /**
     * Get movies
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     */
    getMovies(req,res) {
        MovicesService.find(req.query).then((data)=>{
            res.status(200).send({data})
        }).catch((error)=>{
            console.error('error',error)
            res.status(500).send({message : 'Internal Error'});
        })      
    }

    /**
     * Get movie by id
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     */
    getMovieById(req,res) {
        const ctx = createCtx(req)
        MovicesService.findById(ctx).then((data)=>{
            res.status(200).send(data)
        }).catch((error)=>{
            console.error('error',error)
            res.status(500).send({message : 'Internal Error'});
        })      

    }
}
module.exports = new MoviesController()