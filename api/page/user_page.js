const supertest = require('supertest')
require('dotenv').config();

const api = supertest(process.env.BASE_URL)
const path = '/v1/users';

function createUser(payload) {
  return api.post(path)
    .send(payload)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
}

function getUser(id) {
  return api.get(`${path}/${id}`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
}

function updateUser(payload) {
  return api.put(path)
    .send(payload)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
}

function getuserByName(query) {
  return api.get(path)
    .query(query)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
}

function deleteUser() {
  return api.delete(`${path}/removeAll`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
}

// const createUser = (payload) => api.post(path)
// .send(payload)
// .set('Content-Type', 'application/json')
// .set('Accept', 'application/json')

// const getUser = (id) => api.get(`${path}/${id}`)
// .set('Content-Type', 'application/json')
// .set('Accept', 'application/json')

// const updateUser = (payload) => api.put(path)
// .send(payload)
// .set('Content-Type', 'application/json')
// .set('Accept', 'application/json')

// const getuserByName = (query) => api.get(path)
// .query(query)
// .set('Content-Type', 'application/json')
// .set('Accept', 'application/json')

// const deleteUser = () => api.delete(`${path}/removeAll`)
// .set('Content-Type', 'application/json')
// .set('Accept', 'application/json')

module.exports = {
  createUser, getUser, updateUser, getuserByName, deleteUser,
}