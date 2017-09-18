const Website = require('../lib/WebSite.js');

/**
 * Prerequisites
 *  1. Implementation of WebSite.js has been completed.
 */
(async() => {
  try {
    const webSite = await Website.create();

    console.log('- Test Start');
    // This test actually scraping the site, unknown acquired contents.
    // Therefore, manually it in the console log.

    console.log('  - First test. LastItemKey is Empty.');
    const companies = await webSite.scraping('');
    const lastItemKey = webSite.getLastItemKey(companies);
    for (const company of companies)
      console.log(JSON.stringify(company.toJSON()));
    console.log(` lastItemKey = ${lastItemKey}`);

    console.log('  - Second test. LastItemKey uses the data aquired just before.');
    const secondCompanies = await webSite.scraping(lastItemKey);
    if (secondCompanies.length === 0){
      console.log('  nothing new data.');
    } else {
      for (const company of secondCompanies)
        console.log(JSON.stringify(company.toJSON()));
    }
    console.log('  Complete!');

  } catch (err) {
    console.log('  Failed...');
    console.log(err);
  }
})();
