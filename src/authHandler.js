// import 3rd party modules
const jwt = require('jsonwebtoken');
// import local modules
const {
  authenticateMobile,
  authenticateUser,
} = require('./auth');


/*
handler for authentication at /auth
see routes.js
*/
const authHandler = async (req, h) => {
  // username and password are sent to headers
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

};

module.exports = {
  authHandler,
  loginHandler,
  registerHandler,
};
