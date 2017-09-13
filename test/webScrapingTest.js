const Website = require('../lib/WebSite.js');

(async() => {
  try {
    const webSite = await Website.create();
    const lastItemKey = '';

    console.log('- Test Start');
    await webSite.scraping(lastItemKey);
    console.log('  Complete!');

  } catch (err) {
    console.log('  Failed...');
    console.log(err);
  }
})();
