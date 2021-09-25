const page = require('../page/user_page')
const global = require('../common/global')
const { expect } = require('chai')

const payload = {
  "id": "1",
  "firstName": "Joko",
  "lastName": "Onwor",
  "age": 20,
  "occupation": "Karyawan",
  "nationality": "Indonesia",
  "hobbies": [
    "main game"
  ],
  "gender": "MALE",
  "createdDate": global.now,
  "updatedDate": "2021-09-12T04:31:14.341Z"
}

describe('@intermediate create user', () => {
  it(`success create user`, async () => {
    const response = await page.createUser(payload);
    expect(response.status).to.equal(200);
  })
})