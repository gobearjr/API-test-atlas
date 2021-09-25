const page = require('../page/user_page')
const global = require('../common/global')
const { expect } = require('chai')
const chai = require('chai')
chai.use(require('chai-json-schema'));
const payloadFile = require('../data/payload.json')
const schema = require('../data/schema_user.json')

describe('test with @schema get user', () => {
  it(`success get user`, async () => {
    const query = {
      "name": "Joko"
    }
    const response = await page.getuserByName(query);
    expect(response.status).to.equal(200);
    // console.log(response.body)
    expect(response.body).to.be.jsonSchema(schema);
  })
})