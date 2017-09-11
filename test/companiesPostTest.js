const Server = require('../lib/Server.js');
const Company = require('../lib/model/Company.js');

(async() => {
  try {
    const server = await Server.create();

    const companies = [];
    for(let i = 1; i <= 2; i++) {
      const company = new Company('ID00' + i, 'model化' + i);
      company.overView('Test概要');
      company.workPlace('Tokyo');
      company.employeeNum(i * 10);
      company.salaryLow(i * 20);
      company.salaryHigh(i * 30);
      //console.log(JSON.stringify(company));
      companies.push(JSON.stringify(company));
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
