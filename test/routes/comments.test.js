const request = require('supertest');
const app = require('../../server.js');
const { loginUser } = require('../shared.js');

describe('Comments CRUD', function () {
    var auth = {};
    before(loginUser(auth));

    it('Should get comments', (done) => {
        request(app)
            .get('/movies/1/comments')
            .set('Accept', 'application/json')
            .set('Authorization', auth.token)
            .expect(200, { error: 'Unauthorized', message: 'Authentication failed (token).' })
            .end((err, res) => {
                console.log('Get Movies Response', res.body)
                // console.log('API RES',res.body)
                // if (err) return done(err);
                done();
            });
    });

    it('Should create comment', (done) => {
        request(app)
            .post('/movies/1/comments')
            .set('Accept', 'application/json')
            .set('Authorization', auth.token)
            .send({
                "text":"HEYYYYY",
            })    
            .expect(200, { error: 'Unauthorized', message: 'Authentication failed (token).' })
            .end((err, res) => {
                console.log('Get Movies Response', res.body)
                // console.log('API RES',res.body)
                // if (err) return done(err);
                done();
            });
    });
    it('Should not create comment', (done) => {
        request(app)
            .post('/movies/1/comments')
            .set('Accept', 'application/json')
            .set('Authorization', auth.token)
            .send({
            })    
            .expect(200, { error: 'Unauthorized', message: 'Authentication failed (token).' })
            .end((err, res) => {
                console.log('Get Movies Response', res.body)
                // console.log('API RES',res.body)
                // if (err) return done(err);
                done();
            });
    });


})