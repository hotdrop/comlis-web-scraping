const Server = require('./lib/Server.js');
const WebSite = require('./lib/WebSite.js');

(async() => {
  const server = await Server.create();
  const webSite = await WebSite.create();

  try {
    console.log('- web scraping start! ');
    const lastItemKey = await server.doGetKey();
    const companies = await webSite.scraping(lastItemKey);
    if (!companies || companies.length === 0) {
      console.log(' There is no new company information. ');
      return;
    }
    const newLastItemKey = webSite.getLastItemKey(companies);

    await server.doPostCompanies(companies);
    await server.doPostKey(newLastItemKey);
    console.log('- web scraping complete. ');
  } catch (err) {
    console.log('- web scraping failed...');
    console.log(err);
  }
})();
