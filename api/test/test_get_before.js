const page = require('../page/user_page')
const global = require('../common/global')
const { expect } = require('chai')
const payloadFile = require('../data/payload.json')

describe('using @before hook create user', () => {
  let id = '';
  before(async () => {
    console.log('this is before test')

    const response = await page.createUser(payloadFile);
    expect(response.status).to.equal(global.response.ok);

    id = response.body.id;
  })

  it(`success get user`, async () => {
    const respGet = await page.getUser(id);
    expect(respGet.status).to.equal(global.response.ok);
  })
})