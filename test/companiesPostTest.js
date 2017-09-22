const Server = require('../lib/Server.js');
const Company = require('../lib/model/Company.js');

/**
 * Prerequisites
 *  1. run comlis-data-store application on Server(Springboot and Redis).
 */
(async() => {
  try {
    const server = await Server.create();

    const companies = [];
    for (let i = 1; i <= 5; i++) {
      const company = Company.create('ID00' + i, 'VName' + i);
      company.overview = 'Test概要';
      company.workPlace = 'Tokyo';
      company.employeesNum = i * 10;
      company.salaryLow = i * 200;
      company.salaryHigh = i * 300;
      company.url = 'http://www.testable' + i + '.test.test';
      company.dateEpoch = Date.parse('2017/09/20 12:30');
      companies.push(company);
    }

    console.log('- Test Start');
    await server.doPostCompanies(companies);
    console.log('  Complete! Please check Swagger-ui with POST data.');

  } catch (err) {
    console.log('  Failed...');
    console.log(err);
  }
})();
