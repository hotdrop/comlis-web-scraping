const assert = require('assert');
const Company = require('../lib/model/Company.js');

/**
 * Prerequisites
 *  nothing.
 */
(() => {

  const idNullAndEmptyTest = () => {
    console.log(' - ID Test Start.');
    assert(Company.create(null, 'Test1') === null);
    assert(Company.create('', 'Test2') === null);
    console.log(' - ID Test Success.\n');
  };

  const nameNullAndEmptyTest = () => {
    console.log(' - Name Test Start');
    assert(Company.create('ID001', null) === null);
    assert(Company.create('ID001', '') === null);
    console.log(' - Name Test Success.\n');
  };

  const overviewTest = () => {
    console.log(' - overview Test start.');
    const company = Company.create('ID001', 'shield');

    console.log('  - [null] test start.');
    company.overview = null;
    assert(company._overview === '');
    console.log('  - [null] test success!');

    console.log('  - [max length] test start.');
    const overLenghtStr = makeStrByLength(201);
    company.overview = overLenghtStr;
    assert(company._overview.length === 200);
    const maxLengthStr = makeStrByLength(200);
    company.overview = maxLengthStr;
    assert(company._overview.length === 200);
    console.log('  - [max length] test success!');

    console.log(' - overview Test Success.\n');
  };

  const workPlaceTest = () => {
    console.log(' - WorkPlace Test start.');
    const company = Company.create('ID002', 'hydra');

    console.log('  - [null] test start.');
    company.workPlace = null;
    assert(company._workPlace === '');
    console.log('  - [null] test success!');

    console.log('  - [max length] test start.');
    const overLengthStr = makeStrByLength(51);
    company.workPlace = overLengthStr;
    assert(company._workPlace.length === 50);
    const maxLengthStr = makeStrByLength(50);
    company.workPlace = maxLengthStr;
    assert(company._workPlace.length === 50);
    console.log('  - [max length] test success!');

    console.log(' - WorkPlace Test Success.\n');
  };

  const makeStrByLength = (length => {
    let str = '';
    for (let i = 1; i <= length; i++)
      str += 'a';
    return str;
  });

  const employeesNumTest = () => {
    console.log(' - employeesNum Test start.');
    const company = Company.create('ID003', 'ATCU');

    console.log('  - [null] test start');
    company.employeesNum = null;
    assert(company._employeesNum === 0);
    console.log('  - [null] test success!');

    console.log('  - [not number] test start.');
    company.employeesNum = 'aaa';
    assert(company._employeesNum === 0);
    console.log('  - [not number] test success!');

    console.log('  - [range number] test start.');
    company.employeesNum = -1;
    assert(company._employeesNum === 0);
    company.employeesNum = 100000;
    assert(company._employeesNum === 0);
    company.employeesNum = 1;
    assert(company._employeesNum === 1);
    company.employeesNum = 99999;
    assert(company._employeesNum === 99999);
    console.log('  - [range number] test success!');

    console.log(' - employeesNum Test Success.\n');
  };

  const salaryLowTest = () => {
    console.log(' - SalaryLow Test start.');
    const company = Company.create('ID004', 'Stark Company');

    console.log('  - [null] test start.');
    company.salaryLow = null;
    assert(company._salaryLow === 0);
    console.log('  - [null] test success!');

    console.log('  - [not number] test start.');
    company.salaryLow = 'aaa';
    assert(company._salaryLow === 0);
    console.log('  - [not number] test success!');

    console.log('  - [range number] test start.');
    company.salaryLow = 99;
    assert(company._salaryLow === 0);
    company.salaryLow = 10000;
    assert(company._salaryLow === 0);
    company.salaryLow = 100;
    assert(company._salaryLow === 100);
    company.salaryLow = 9999;
    assert(company._salaryLow === 9999);
    console.log('  - [range number] test success!');

    console.log(' - SalaryLow Test Success.\n');
  };

  const salaryHighTest = () => {
    console.log(' - SalaryHigh Test start.');
    const company = Company.create('ID005', 'Avengers');

    console.log('  - [null] test start.');
    company.salaryHigh = null;
    assert(company._salaryHigh === 0);
    console.log('  - [null] test success!');

    console.log('  - [not number] test start.');
    company.salaryHigh = 'aaa';
    assert(company._salaryHigh === 0);
    console.log('  - [not number] test success!');

    console.log('  - [range number] test start.');
    company.salaryHigh = 99;
    assert(company._salaryHigh === 0);
    company.salaryHigh = 10000;
    assert(company._salaryHigh === 0);
    company.salaryHigh = 100;
    assert(company._salaryHigh === 100);
    company.salaryHigh = 9999;
    assert(company._salaryHigh === 9999);
    console.log('  - [range number] test success!');

    console.log(' - SalaryHigh Test Success.\n');
  };

  const toJSONTest = () => {
    console.log(' - toJSON Test start.');
    const testEpoch = Date.parse('2017/09/14 10:00');
    const resultJson = {
      id: 'ID006',
      name: 'nobita manjyuu',
      overview: 'testes',
      workPlace: 'NY',
      employeesNum: 10,
      salaryLow: 200,
      salaryHigh: 300,
      url: 'https://test.test',
      dateEpoch: testEpoch};
    const company = Company.create('ID006', 'nobita manjyuu');
    company.overview = 'testes';
    company.workPlace = 'NY';
    company.employeesNum = 10;
    company.salaryLow = 200;
    company.salaryHigh = 300;
    company.url = 'https://test.test';
    company.dateEpoch = testEpoch;
    assert(JSON.stringify(company.toJSON()) === JSON.stringify(resultJson));
    console.log(' - toJSON Test Success.\n');
  };

  const itemKeyTest = () => {
    console.log(' - itemKey Test start.');
    const company = Company.create('ID007', 'nobi nobita');
    company.itemKey = 'doraemon';
    assert(company.itemKey === 'doraemon');
    console.log(' - itemKey Test Success.\n');
  };

  const urlTest = () => {
    console.log(' - URL Test start.');
    const company = Company.create('ID008', 'sield plus');
    company.url = null;
    assert(company._url === '');
    company.url = 'error';
    assert(company._url === '');
    company.url = 'http:error';
    assert(company._url === '');
    company.url = 'errorhttp://www.google';
    assert(company._url === '');
    company.url = 'http://www.test';
    assert(company._url === 'http://www.test');
    company.url = 'https://www.test';
    assert(company._url === 'https://www.test');
    console.log(' - URL Test Success. \n');
  };

  console.log('- Test Start!');
  idNullAndEmptyTest();
  nameNullAndEmptyTest();
  overviewTest();
  workPlaceTest();
  employeesNumTest();
  salaryLowTest();
  salaryHighTest();
  toJSONTest();
  itemKeyTest();
  urlTest();
  console.log('- All Test Clear! \n');
})();
