const Server = require('../lib/Server.js');

(async() => {
  try {
    const server = await Server.create();

    const companies = [];
    for(let i = 1; i <= 10; i++) {
      const company = {
        id: 'ID00' + i,
        name: 'テスト' + i,
        overView: 'Test概要',
        workPlace: 'Tokyo',
        employeeNum: i * 10,
        salaryLow: i * 20,
        salaryHigh: i * 30
      };
      companies.push(company);
    }
    const noInfoCompany = { id: 'ID011', name: '全未入力テスト', overView: '', workPlace: '', employeeNum: 0, salaryLow: 0, salaryHigh: 0 };
    companies.push(noInfoCompany);

    console.log('- Test Start');
    await server.doPostCompanies(companies);
    console.log('  Complete! Please check Swagger-ui with POST data.');

  } catch(err) {
    console.log('  Failed...');
    console.log(err);
  }
})();
