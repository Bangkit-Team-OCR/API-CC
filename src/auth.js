
// import 3rd party modules
const jwt = require('jsonwebtoken');
// import local modules
const { database } = require('./database');

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
      expiresIn: "1 years",
      audience: "mobile",
      issuer: "backend"
    }, process.env.SECRET_KEY);

    return token;
  }
  // throw an custom error if username and passwod is invalid
  throw new Error("CREDENTIAL ERROR::invalid username or password");
}

const authenticateUser = async (email, password) => {
  const user = await database.getUserByEmail(email);
  if (email === user.email && password === user.password) {
    // console.log(user.nik);
    // sign jwt
    // jwt docs https://jwt.io/introduction
    // console.log(user);
    const token = jwt.sign({
      expiresIn: "1 years",
      audience: "user",
      issuer: "backend",
      data: {
        id: user.userId,
        email: user.email,
        profileId: user.profileId,
      }
    }, process.env.SECRET_KEY);

    return token;
  }
  throw new Error("CREDENTIAL ERROR::invalid username or password");

}

module.exports = {
  authenticateMobile, authenticateUser
}