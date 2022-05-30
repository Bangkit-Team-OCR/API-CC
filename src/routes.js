// import local modules
const { authHandler, registerHandler, loginHandler } = require('./authHandler');

const routes = [
  {
    method: 'POST',
    path: '/auth',
    handler: authHandler,
  },
  {
    method: 'POST',
    path: '/login',
    handler: loginHandler,
  },
  {
    method: 'POST',
    path: '/register',
    handler: registerHandler,
  },
];

module.exports = { routes }