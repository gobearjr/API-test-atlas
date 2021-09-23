const page = require('../page/user_page')
const global = require('../common/global')
const { expect } = require('chai')


const scenarios = {
  "positive": {
    "createUsers": "System will create user properly",
    "createUserUniqName": "User with name Joko will created",
    "getuserByName": "Get user detail by Name",
    "getuserById": "Get user detail by ID",
    "chaining": "Chain request",
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
  let id = '';
  it(`${scenarios.positive.createUsers}`, async () => {
    const response = await page.createUser(payload);
    expect(response.status).to.equal(200);
  })

  it(`${scenarios.negative.genderUnknown}`, async () => {
    const body = payload;
    payload.gender = 'Unknown'
    const response = await page.createUser(body);
    expect(response.status).to.equal(400);
    payload.gender = 'MALE';
  })

  it(`${scenarios.positive.chaining}`, async () => {
    const response = await page.createUser(payload);
    expect(response.status).to.equal(global.response.ok);
    id = response.body.id;
    const respGet = await page.getUser(id);
    expect(respGet.status).to.equal(global.response.ok);
    const female = 'FEMALE';
    const newName = 'Fatur';
    payload.gender = female;
    payload.id = id;
    payload.firstName = newName;
    const body = payload;
    const respUpdate = await page.updateUser(body);
    expect(respUpdate.status).to.equal(global.response.ok);
    expect(respUpdate.body.gender).to.equal(female);
    const query = {
      "name": newName
    }
    const respGetName = await page.getuserByName(query);
    expect(respGetName.status).to.equal(global.response.ok);
    expect(respGetName.body.data[0].firstName).to.equal(newName);
    const clearUser = await page.deleteUser();
    expect(clearUser.status).to.equal(global.response.ok);
    const respGetNameAgain = await page.getuserByName(query);
    expect(respGetNameAgain.status).to.equal(global.response.ok);

  })
})