// import 3rd party modules
const jwt = require('jsonwebtoken');
const bycrpt = require('bcryptjs');
// import local modules
const {
  database
} = require('./database');

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
  if (typeof user === 'undefined') {
    throw new Error('DATABASE ERROR:: error fetching user');
  }

  const isPassword = bycrpt.compareSync(password, user.password);
  if (email === user.email && isPassword) {
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

const registerEmailUser = async (email, password) => {
  if (typeof await database.getUserByEmail(email) !== 'undefined') {
    throw new Error('INSERTION ERROR::duplicate user');
  }

  const salt = bycrpt.genSaltSync();
  const hashedPass = bycrpt.hashSync(password, salt);

  
  const inserted = await database.insertUser(email, hashedPass);

  if (inserted) {
    return 'insert new user success';
  }

  throw new Error('INSERTION ERROR::failed inserting new user');
}

const registerUser = async (email, password, nik, nama, provinsi, kabupaten, alamat) => {
  

  if (typeof await database.getUserByEmail(email) !== 'undefined') {
    throw new Error('INSERTION ERROR::duplicate user');
  }

  // let profile = await database.getUserByNik(nik); // if not undefined profileId

  // insertedId
  // if (typeof profile === 'undefined') {
  //   profile = await database.insertProfile(nik, nama, provinsi, kabupaten, alamat);
  // }
  
  // profile = profile.profileId ? profile.profileId : profile.insertedId;

  const salt = bycrpt.genSaltSync();
  const hashedPass = bycrpt.hashSync(password, salt);

  
  const inserted = await database.insertUser(email, hashedPass);

  if (inserted) {
    return 'insert new user success';
  }

  throw new Error('INSERTION ERROR::failed inserting new user');
};

module.exports = {
  authenticateMobile,
  authenticateUser,
  registerUser,
  registerEmailUser,
};