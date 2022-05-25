
// import 3rd party modules
const jwt = require('jsonwebtoken');

/**
 * 
 * @param {string} username - admin username to authenticate mobile
 * @param {string} password - admin password to authenticate mobile
 * @returns {string} return a token to be used for authentication or throw an error
 */
const authenticateMobile = (username, password) => {
  // USER_ADMIN in .env
  // PASSWORD_ADMIN in .env
  // SECRET_KEY in .env
  if (username === process.env.USER_ADMIN && password === process.env.PASSWORD_ADMIN) {
    // sign jwt
    // jwt docs https://jwt.io/introduction
    const token = jwt.sign({
      expiresIn: "1 days",
      audience: "mobile",
      issuer: "backend"
    }, process.env.SECRET_KEY);

    return token;
  }
  // throw an custom error if username and passwod is invalid
  throw new Error("CREDENTIAL ERROR::unvalid username or password");
}

const authenticateUser = (username, password) => {
  // USER_NORMAL in .env
  // PASSWORD_USER in .env
  // SECRET_KEY in .env 
  if (username === process.env.NORMAL_USER && password === process.env.PASSWORD_USER) {
    // sign jwt
    // jwt docs https://jwt.io/introduction
    const token = jwt.sign({
      expiresIn: "1 days",
      audience: "user",
      issuer: "backend"
    }, process.env.SECRET_KEY);

    return token;
  }
}

module.exports = {
  authenticateMobile, authenticateUser
}