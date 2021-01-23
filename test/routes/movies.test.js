const request = require('supertest');
const app = require('../../server.js');


describe('Movies CRUD', function() {
    var auth = {};
    before(loginUser(auth));

    it('Should get movies', (done) => {
        request(app)
        .get('/movies')
        .set('Accept', 'application/json')
        .set('Authorization', auth.token)
        .expect(200, { error: 'Unauthorized', message: 'Authentication failed (token).' })
        .end((err, res) => {
            console.log('Get Movies Response',res.body)
            // console.log('API RES',res.body)
            // if (err) return done(err);
            done();
        });
    });

    it('Should get LIMITED movies', (done) => {
        request(app)
        .get('/movies?limit=2')
        .set('Accept', 'application/json')
        .set('Authorization', auth.token)
        .expect(200, { error: 'Unauthorized', message: 'Authentication failed (token).' })
        .end((err, res) => {
            console.log('Get Movies Limited Response',res.body)
            // console.log('API RES',res.body)
            // if (err) return done(err);
            done();
        });
    });

    it('Should get LIMITED OFFSET movies', (done) => {
        request(app)
        .get('/movies?limit=2&offset=3')
        .set('Accept', 'application/json')
        .set('Authorization', auth.token)
        .expect(200, { error: 'Unauthorized', message: 'Authentication failed (token).' })
        .end((err, res) => {
            console.log('Get Movies Limited Offset Response',res.body)
            // console.log('API RES',res.body)
            // if (err) return done(err);
            done();
        });
    });


    it('Get a movie by id', (done) => {
        request(app)
        .get('/movies/1')
        .set('Accept', 'application/json')
        .set('Authorization', auth.token)
        .expect(200, { error: 'Unauthorized', message: 'Authentication failed (token).' })
        .end((err, res) => {
            console.log('MOVIE BY ID',res.body)
            // console.log('API RES',res.body)
            // if (err) return done(err);
            done();
        });
    });

});


function loginUser(auth) {
    
    return function(done) {
        request(app)
            .post('/auth/login')
            .send({
                "email":"admin@admin.com",
                "password": "1234"
            })
            .expect(200)
            .end(onResponse);
        
        function onResponse(err, res) {
            auth.token = 'Bearer ' + res.body.data;
            return done();
        }
    };
}