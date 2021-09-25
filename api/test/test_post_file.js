const page = require('../page/user_page')
const global = require('../common/global')
const { expect } = require('chai')
const payloadFile = require('../data/payload.json')

describe('test with @file create user', () => {
  it(`success create user`, async () => {
    const response = await page.createUser(payloadFile);
    expect(response.status).to.equal(200);
  })
})