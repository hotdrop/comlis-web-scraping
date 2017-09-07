const Server = require('./lib/Server.js');

(async() => {
  try {
    const server = await Server.create();
    const previousKey = await server.doGetKey();
    console.log('get previous key = ' + previousKey);
  } catch(err) {
    console.log(err);
  }
})();
