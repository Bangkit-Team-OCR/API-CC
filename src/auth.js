// import 3rd party modules
const jwt = require('jsonwebtoken');

const authenticateMobile = (username, password) => {
  const token = jwt.sign({
    expiresIn: "1 days",
    audience: "mobile",
    issuer: "backend"
  });

  return token;
}

module.exports = { authenticateMobile }