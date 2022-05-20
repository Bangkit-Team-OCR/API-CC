// import local modules
const { authHandler } = require('./authHandler');

require('dotenv').config();

const routes = [
  {
    method: 'POST',
    path: '/auth',
    handler: authHandler,
  },
];

module.exports = { routes }