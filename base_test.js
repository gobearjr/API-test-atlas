const supertest = require('supertest');
const { expect } = require('chai')

const api = supertest('http://localhost:1234');
const path = '/v1/users';

function createUser() {
  return api.post(path)
  .send(payload)
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json')
}

const payload = {
  "id": "1",
  "firstName": "Joko",
  "lastName": "Onwor",
  "age": 20,
  "occupation": "Karyawan",
  "nationality": "Indoensia",
  "hobbies": [
    "main game"
  ],
  "gender": "MALE",
  "createdDate": "2021-09-12T04:31:14.341Z",
  "updatedDate": "2021-09-12T04:31:14.341Z"
}

describe('Create user', () => {
  it('As a System, I want to create new user', async () => {
    const response = await createUser();
    expect(response.status).to.equal(200);
  })
})