const Website = require('../lib/WebSite.js');

(async() => {
  try {
    const webSite = await Website.create();

    console.log('- Test Start');
    // このテストは実際にサイトをスクレイピングするので、取得項目数や中身は不明。
    // なのでassertは使わずコンソールログで目視確認する。

    console.log('  - First test. LastItemKey is Empty.');
    const companies = await webSite.scraping('');
    const lastItemKey = webSite.getlastItemKey(companies);
    for (const company of companies)
      console.log(JSON.stringify(company.toJSON()));
    console.log(` lastItemKey = ${lastItemKey}`);

    console.log('  - Second test. LastItemKey uses the data aquired just before.');
    // TODO write second test.
    console.log('  Complete!');

  } catch (err) {
    console.log('  Failed...');
    console.log(err);
  }
})();
