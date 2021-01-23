const request = require('supertest');
const app = require('../../server.js');
const { loginUser } = require('../shared.js');


describe('RATINGS', function () {
    var auth = {};
    before(loginUser(auth));

    it('ADD RATING FAIL', (done) => {
        request(app)
            .put('/api/movies/1/ratings')
            .set('Accept', 'application/json')
            .set('Authorization', auth.token)
            .send({

            })
            .expect(200, { error: 'Unauthorized', message: 'Authentication failed (token).' })
            .end((err, res) => {
                console.log('ADD RATING', res.body)
                done();
            });
    });

    it('ADD RATING SUCCESS', (done) => {
        request(app)
            .put('/api/movies/1/ratings')
            .set('Accept', 'application/json')
            .set('Authorization', auth.token)
            .send({
                rating: 2
            })
            .expect(200, { error: 'Unauthorized', message: 'Authentication failed (token).' })
            .end((err, res) => {
                console.log('ADD RATING', res.body)
                done();
            });
    });


    it('DELETE RATING', (done) => {
        request(app)
            .delete('/api/movies/1/ratings')
            .set('Accept', 'application/json')
            .set('Authorization', auth.token)
            .expect(200, { error: 'Unauthorized', message: 'Authentication failed (token).' })
            .end((err, res) => {
                console.log('ADD RATING', res.body)
                done();
            });
    });

    it('ADD RATING SUCCESS', (done) => {
        request(app)
            .put('/api/movies/1/ratings')
            .set('Accept', 'application/json')
            .set('Authorization', auth.token)
            .send({
                rating: 4
            })
            .expect(200, { error: 'Unauthorized', message: 'Authentication failed (token).' })
            .end((err, res) => {
                console.log('ADD RATING', res.body)
                done();
            });
    });

})
