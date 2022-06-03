// import 3rd party modules
const Hapi = require('@hapi/hapi');
// import local modules
const { database } = require('./database');
const {
  routes
} = require('./routes');
const init = async () => {
  const server = Hapi.server({
    port: process.env.NODE_PORT || 5000,
    host: process.env.NODE_HOST || 'localhost',
  });

  server.route(routes);

  await server.start();
  console.log(`Server is running on ${server.info.uri}`);
};

init();