const supertest = require('supertest')
require('dotenv').config();

const api = supertest(process.env.BASE_URL)
const path = '/v1/users';

const createUser = (payload) => api.post(path)
.send(payload)
.set('Content-Type', 'application/json')
.set('Accept', 'application/json')

module.exports = {
  createUser,
}