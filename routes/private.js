const express = require('express');
const validate = require('express-validation');
const router = express.Router();
const auth = require('../controllers/auth');
const comments = require('../controllers/comments');
const movies = require('../controllers/movies');
const authenticate = require('../middleware/authenticate');
const { commentParam } = require('../validations/comments');

router.get('/auth/me', authenticate, auth.me);
router.put('/movies/:mId/comments/:cId',[authenticate,validate(commentParam)],comments.edit)
router.post('/movies/:mId/comments',[authenticate,validate(commentParam)],comments.create)
router.get('/movies/:mId/comments',authenticate,comments.get)
router.get('/movies/:mId',authenticate,movies.getMovieById)
router.get('/movies',authenticate,movies.getMovies)


module.exports = router;