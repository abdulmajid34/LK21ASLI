const request = require('supertest');
const app = require('../app');

// SUCCESS REGISTER
let userRegis = {
    username: "test",
    email: "test@mail.com",
    password: "password"
}

// SUCCESS LOGIN
let userLogin = {
    email: "test@mail.com",
    password: "password"
}

// Action test successfully register
describe("POST /register successfully created", function() {
    it("response with status 201 and return an object with id, username, email", function(done) {
        request(app)
        .post("/register")
        .send(userRegis)
        .set("Accept", 'application/json')
        .then((response) => {
            let { body, status } = response;
            expect(status).toEqual(201);
            // expect(typeof body).toEqual("object"); // test untuk mastikan data nya itu object kembaliannya
            expect(body).toHaveProperty("username");
            expect(body).toHaveProperty("email");
            
            done()
        })
        .catch((err) => {
            done(err)
        })
    })
})

describe("POST /login Successfully logged in", () => {
    it('response with status 200 and return with json id, email, and access_token', (done) => {
        request(app)
        .post('/login')
        .send(userLogin)
        .set('Accept', 'application/json')
        .then((response) => {
            let { body, status } = response
            expect(status).toEqual(200)
            expect(body).toHaveProperty('id', expect.any(Number))
            expect(body).toHaveProperty('email', dataValid.email)
            expect(body).toHaveProperty('access_token', expect.any(String))
            access_token = response.body.access_token
            done()
        })
        .catch((err) => {
            done(err)
        })
    })
})