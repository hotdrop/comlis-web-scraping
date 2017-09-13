const assert = require('assert');
const Server = require('../lib/Server.js');

(async() => {
  try {
    const server = await Server.create();

    console.log('- Test Start');
    const newKey = 'toNodeKey';
    await server.doPostKey(newKey);

    const newKeyGetFromServer = await server.doGetKey();
    assert.equal(newKey, newKeyGetFromServer, ` Error! "${newKey}" != "${newKeyGetFromServer}" `);
    console.log('  Success!');

  } catch (err) {
    console.log('  Failed...');
    console.log(err);
  }
})();
