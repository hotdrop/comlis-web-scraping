const Server = require('../lib/Server.js');

(async() => {
  try {
    const server = await Server.create();

    console.log('--- Start Get Test ---');
    const previousKey = await server.doGetKey();
    console.log(`  get previous key = ${previousKey} \n`);

    console.log('--- Start Post Test ---');
    const newKey = 'toNodeKey';
    const result = await server.doPostKey(newKey);
    const newKeyGetFromServer = await server.doGetKey();
    // I want to use power assert
    if(newKeyGetFromServer === newKey) {
      console.log('  Test Success.');
    } else {
      console.log(`  Test Failed.  \n` +
                  `      POST key value: ${newKey} \n` +
                  `      GET  key value: ${newKeyGetFromServer}`);
    }
  } catch(err) {
    console.log(err);
  }
})();
