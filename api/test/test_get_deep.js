const page = require('../page/user_page')
const global = require('../common/global')
const { expect } = require('chai')

describe('@deep assertion get user', () => {
  it(`success get user`, async () => {
    const query = {
      "name": "Joko"
    }
    const response = await page.getuserByName(query);
    expect(response.status).to.equal(200);
    expect(response.body.data[0].occupation).to.equal('Karyawan')
  })
})