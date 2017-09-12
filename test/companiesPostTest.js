const Server = require('../lib/Server.js');
const Company = require('../lib/model/Company.js');

(async() => {
  try {
    const server = await Server.create();

    const companies = [];
    for(let i = 1; i <= 10; i++) {
      const company = Company.create('ID00' + i, 'model化' + i);
      company.overView('Test概要');
      company.workPlace('Tokyo');
      company.employeeNum(i * 10);
      company.salaryLow(i * 20);
      company.salaryHigh(i * 30);
      companies.push(company.toJSON());
    }

    console.log('- Test Start');
    await server.doPostCompanies(companies);
    console.log('  Complete! Please check Swagger-ui with POST data.');

  } catch(err) {
    console.log('  Failed...');
    console.log(err);
  }
})();
