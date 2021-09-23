const supertest = require('supertest')
require('dotenv').config();

const api = supertest(process.env.BASE_URL)
const path = '/v1/users';

const createUser = (payload) => api.post(path)
.send(payload)
.set('Content-Type', 'application/json')
.set('Accept', 'application/json')

const getUser = (id) => api.get(`${path}/${id}`)
.set('Content-Type', 'application/json')
.set('Accept', 'application/json')

const updateUser = (payload) => api.put(path)
.send(payload)
.set('Content-Type', 'application/json')
.set('Accept', 'application/json')

const getuserByName = (query) => api.get(path)
.query(query)
.set('Content-Type', 'application/json')
.set('Accept', 'application/json')

const deleteUser = () => api.delete(`${path}/removeAll`)
.set('Content-Type', 'application/json')
.set('Accept', 'application/json')

module.exports = {
  createUser, getUser, updateUser, getuserByName, deleteUser,
}