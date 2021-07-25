const request = require('../../src/middlewares/request')
const authDomain = require('../../src/domains/auth')
const authValidator = require('../../src/validators/auth')

module.exports = request.post(authDomain.signUp, authValidator.signUpSchema)
