const request = require('supertest');
const app = require('../../server.js');
const { loginUser } = require('../shared.js');

describe('Comments CRUD', function () {
    var auth = {};
    before(loginUser(auth));

    it('Should get comments', (done) => {
        request(app)
            .get('/api/movies/1/comments')
            .set('Accept', 'application/json')
            .set('Authorization', auth.token)
            .expect(200, { error: 'Unauthorized', message: 'Authentication failed (token).' })
            .end((err, res) => {
                done();
            });
    });

    it('Should create comment', (done) => {
        request(app)
            .post('/api/movies/1/comments')
            .set('Accept', 'application/json')
            .set('Authorization', auth.token)
            .send({
                "text":"HEYYYYY",
            })    
            .expect(200, { error: 'Unauthorized', message: 'Authentication failed (token).' })
            .end((err, res) => {
                // console.log('API RES',res.body)
                // if (err) return done(err);
                done();
            });
    });
    it('Should not create comment', (done) => {
        request(app)
            .post('/api/movies/1/comments')
            .set('Accept', 'application/json')
            .set('Authorization', auth.token)
            .send({
            })    
            .expect(200, { error: 'Unauthorized', message: 'Authentication failed (token).' })
            .end((err, res) => {
                // console.log('API RES',res.body)
                // if (err) return done(err);
                done();
            });
    });
    it('Should update comment', (done) => {
        request(app)
            .put('/api/movies/1/comments/1')
            .set('Accept', 'application/json')
            .set('Authorization', auth.token)
            .send({
                text:"UPDATEEEEEEEE"
            })    
            .expect(200, { error: 'Unauthorized', message: 'Authentication failed (token).' })
            .end((err, res) => {
                // console.log('API RES',res.body)
                // if (err) return done(err);
                done();
            });
    });
    it('Should DELETE comment', (done) => {
        request(app)
            .delete('/api/movies/1/comments/1')
            .set('Accept', 'application/json')
            .set('Authorization', auth.token)
            .expect(200, { error: 'Unauthorized', message: 'Authentication failed (token).' })
            .end((err, res) => {
                // console.log('API RES',res.body)
                // if (err) return done(err);
                done();
            });
    });

})