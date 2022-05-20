// import 3rd party modules
const jwt = require('jsonwebtoken');
// import local modules
const { authenticateMobile } = require('./auth');

const authHandler = async (req, h) => {
  const username = "admin";
  const password = "admin";

  const token = authenticateMobile(username, password);

  return token;
};

module.exports = { authHandler }