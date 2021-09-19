const page = require('../page/user_page')
const global = require('../common/global')
const { expect } = require('chai')

const scenarios = {
  "positive": {
    "createUsers": "System will create user properly",
    "createUserUniqName": "User with name Joko will created"
  },
  "negative": {
    "genderUnknown": "Send request with gender Unknown",
    "emptyAuth": "Send request with empty auth"
  }
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
  "createdDate": global.now,
  "updatedDate": "2021-09-12T04:31:14.341Z"
}

describe('Create user', () => {
  it(`${scenarios.positive.createUsers}`, async () => {
    // console.log(payload);
    const response = await page.createUser(payload);
    expect(response.status).to.equal(200);
  })

  it(`${scenarios.negative.genderUnknown}`, async () => {
    const body = payload;
    payload.gender = 'Unknown'
    const response = await page.createUser(body);
    expect(response.status).to.equal(400);
  })
})