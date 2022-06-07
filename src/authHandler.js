// import 3rd party modules
const jwt = require('jsonwebtoken');
// import local modules
const {
  authenticateMobile,
  authenticateUser,
  registerUser
} = require('./auth');
// const { database } = require('./database');


/*
handler for authentication at /auth
see routes.js
*/
const authHandler = async (req, h) => {
  const {
    username,
    password
  } = req.headers;

  let res = null;

  try {
    const token = authenticateMobile(username, password);
    res = h.response({
      status: "success",
      message: "generate new token",
      res: token,
    });
    res.statusCode = 200;
  } catch (error) {
    res = h.response({
      status: "failed",
      message: error.message,
    });
    res.statusCode = 401;
  }

  return res;
};

/*
handler for user login at /login
see routes.js
*/
const loginHandler = async (req, h) => {
  const {
    email,
    password
  } = req.headers;

  let res = null;

  try {
    const token = await authenticateUser(email, password);
    res = h.response({
      status: "success",
      message: "generate new token",
      res: token,
    });
    res.statusCode = 200;
  } catch (error) {
    res = h.response({
      status: "failed",
      message: error.message,
    });
    res.statusCode = 401;
  }

  return res;

};

const registerHandler = async (req, h) => {
  const { token } = req.headers;

  const {
    email,
    password,
    nik,
    nama,
    provinsi,
    kabupaten,
    alamat,
  } = req.payload;

  let res = null;
  try {
    const admin = jwt.verify(token, process.env.SECRET_KEY);
    const message = await registerUser(email, password, nik, nama, provinsi, kabupaten, alamat);

    res = h.response({
      status: 'success',
      message: message
    });
    res.statusCode = 201;
  } catch (error) {
    res = h.response({
      status: 'failed',
      message: error.message
    });
    res.statusCode = 401;
  }

  return res;
};

module.exports = {
  authHandler,
  loginHandler,
  registerHandler,
};