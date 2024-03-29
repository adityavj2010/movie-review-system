const request = require('supertest');
const app = require('../server.js');

function loginUser(auth) {
  return function(done) {
    request(app)
      .post('/api/auth/login')
      .send({
        email: 'admin@admin.com',
        password: '1234',
      })
      .expect(200)
      .end(onResponse);

    function onResponse(err, res) {
      if(err)
      {
        return done(err)
      }
      auth.token = 'Bearer ' + res.body.data;
      return done();
    }
  };
}

module.exports = {loginUser};
