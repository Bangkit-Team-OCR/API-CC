// import 3rd party modules
const jwt = require('jsonwebtoken');
// import local modules
const {
  authenticateMobile,
  authenticateUser,
  registerUser,
  registerEmailUser
} = require('./auth');
const { database } = require('./database');
// const { database } = require('./database');


/*
handler for authentication at /auth
see routes.js
*/
const authHandler = async (req, h) => {
  const {
    username,
    password
  } = req.payload;

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
  } = req.payload;

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
  let res = null;
  try {
    const {
      token,
      email,
      password
    } = req.payload;

    const admin = jwt.verify(token, process.env.SECRET_KEY);

    if (admin.audience !== 'mobile') {
      throw new Error('CREDENTIAL ERROR::not admin try change the token');
    }

    const message = await registerEmailUser(email, password);

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

const registerProfileHandler = async (req, h) => {
  let res = null;
  try {
    const {
      token,
      nik,
      nama,
      provinsi,
      kabupaten,
      alamat
    } = req.payload;

    const admin = jwt.verify(token, process.env.SECRET_KEY);

    if (admin.audience !== 'user') {
      throw new Error('CREDENTIAL ERROR::not user try change the token');
    }

    const message = await registerUser(admin.email, nik, nama, provinsi, kabupaten, alamat);

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

const getUserProfileHandler = async (req, h) => {
  let res = null;
  try {
    const {
      token,
    } = req.headers;
    const user = jwt.verify(token, process.env.SECRET_KEY);

    if (user.audience !== 'user') {
      throw new Error('CREDENTIAL ERROR::not user try change the token');
    }

    const data = await database.getUserProfileByEmail(user.data.email);

    res = h.response({
      status: 'success',
      message: 'getting user\'s profile successfully',
      data
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
  registerProfileHandler,
  getUserProfileHandler
};