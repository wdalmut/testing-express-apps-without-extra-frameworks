const http = require('http')
const request = require('request')

describe("App", () => {
  let app = null;
  let address = null

  beforeEach(() => {
    app = require('../src')
    app = http.createServer(app).listen(0);
    address = `http://127.0.0.1:${app.address().port}`
  })

  describe("Home", () => {
    it("should say hello world", (done) => {
      request.get({
        uri: `${address}/`,
      }, (err, res) => {
        if (err) {
          return done(new Error(err))
        }

        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual('Hello World!')
        done();
      })
    })

    it("should say example", (done) => {
      request.get({
        uri: `${address}/example`,
      }, (err, res) => {
        if (err) {
          return done(new Error(err))
        }

        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual('Example')

        done();
      })
    })
  })
});
