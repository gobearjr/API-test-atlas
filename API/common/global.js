const moment = require('moment')

const now = moment().format('YYYY-MM-DDTHH:mm:ss');

const response = {
  ok: 200,
  created: 201, // for created success
  accepted: 202,
  noContent: 204,
  badRequest: 400, // for blank or no key sent
  unauthorized: 401, // for no login
  unproceccable: 422,
  forbidden: 403,
  invalidAuth: 403,
  notFound: 404,
  internalServerError: 500,
};

module.exports = {
  now, response
}