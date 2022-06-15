// import local modules
const {
  authHandler,
  registerHandler,
  loginHandler,
  registerProfileHandler
} = require('./authHandler');
const loadModelHandler = require('./modelHandler');
// testing


const routes = [{
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
  {
    method: 'POST',
    path: '/load-model',
    handler: loadModelHandler,
  },
  {
    method: 'POST',
    path: '/register-profile',
    handler: registerProfileHandler,
  }
];

module.exports = {
  routes
}