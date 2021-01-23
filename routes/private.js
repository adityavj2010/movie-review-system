const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');
const comments = require('../controllers/comments');
const movies = require('../controllers/movies');
const authenticate = require('../middleware/authenticate')

router.get('/auth/me', authenticate, auth.me);
router.get('/movies/:mId/comments',authenticate,comments.getComments)
router.get('/movies/:mId',authenticate,movies.getMovieById)
router.get('/movies',authenticate,movies.getMovies)


module.exports = router;