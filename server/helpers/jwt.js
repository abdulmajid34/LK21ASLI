const jwt = require('jsonwebtoken')
// const JWT_SECRET = process.env.JWT_SECRET
let JWT_SECRET = 'lk21asli_key'

function sign(payload) {
    return jwt.sign(payload, JWT_SECRET)
}
function verify(payload) {
    return jwt.verify(payload, JWT_SECRET)
}

module.exports = { sign, verify }