const assert = require('assert');
const Company = require('../lib/model/Company.js');

function idNullAndEmptyTest() {
  console.log(' - ID Test Start.');
  assert(Company.create(null, 'Test1') === null);
  assert(Company.create('', 'Test2') === null);
  console.log(' - ID Test Success.\n');
}

function nameNullAndEmptyTest() {
  console.log(' - Name Test Start');
  assert(Company.create('ID001', null) === null);
  assert(Company.create('ID001', '') === null);
  console.log(' - Name Test Success.\n');
}

function overViewTest() {
  console.log(' - OverView Test start.');
  const company = Company.create('ID001', 'shield');

  console.log('  - [null] test start.');
  company.overView(null);
  assert(company._overView === '');
  console.log('  - [null] test success!');

  console.log('  - [max length] test start.');
  const overLenghtStr = makeStrByLength(201);
  company.overView(overLenghtStr);
  assert(company._overView.length === 200);
  const maxLengthStr = makeStrByLength(200);
  company.overView(maxLengthStr);
  assert(company._overView.length === 200);
  console.log('  - [max length] test success!');

  console.log(' - OverView Test Success.\n');
}

function workPlaceTest() {
  console.log(' - WorkPlace Test start.');
  const company = Company.create('ID002', 'hydra');

  console.log('  - [null] test start.');
  company.workPlace(null);
  assert(company._workPlace === '');
  console.log('  - [null] test success!');

  console.log('  - [max length] test start.');
  const overLengthStr = makeStrByLength(51);
  company.workPlace(overLengthStr);
  assert(company._workPlace.length === 50);
  const maxLengthStr = makeStrByLength(50);
  company.workPlace(maxLengthStr);
  assert(company._workPlace.length === 50);
  console.log('  - [max length] test success!');

  console.log(' - WorkPlace Test Success.\n');
}

function makeStrByLength(length) {
  let str = '';
  for (let i = 1; i <= length; i++)
    str += 'a';
  return str;
}

function employeeNumTest() {
  console.log(' - EmployeeNum Test start.');
  const company = Company.create('ID003', 'ATCU');

  console.log('  - [null] test start');
  company.employeeNum(null);
  assert(company._employeeNum === 0);
  console.log('  - [null] test success!');

  console.log('  - [not number] test start.');
  company.employeeNum('aaa');
  assert(company._employeeNum === 0);
  console.log('  - [not number] test success!');

  console.log('  - [range number] test start.');
  company.employeeNum(-1);
  assert(company._employeeNum === 0);
  company.employeeNum(100000);
  assert(company._employeeNum === 0);
  company.employeeNum(1);
  assert(company._employeeNum === 1);
  company.employeeNum(99999);
  assert(company._employeeNum === 99999);
  console.log('  - [range number] test success!');

  console.log(' - EmployeeNum Test Success.\n');
}

function salaryLowTest() {
  console.log(' - SalaryLow Test start.');
  const company = Company.create('ID004', 'Stark Company');

  console.log('  - [null] test start.');
  company.salaryLow(null);
  assert(company._salaryLow === 0);
  console.log('  - [null] test success!');

  console.log('  - [not number] test start.');
  company.salaryLow('aaa');
  assert(company._salaryLow === 0);
  console.log('  - [not number] test success!');

  console.log('  - [range number] test start.');
  company.salaryLow(99);
  assert(company._salaryLow === 0);
  company.salaryLow(10000);
  assert(company._salaryLow === 0);
  company.salaryLow(100);
  assert(company._salaryLow === 100);
  company.salaryLow(9999);
  assert(company._salaryLow === 9999);
  console.log('  - [range number] test success!');

  console.log(' - SalaryLow Test Success.\n');
}

function salaryHighTest() {
  console.log(' - SalaryHigh Test start.');
  const company = Company.create('ID005', 'Avengers');

  console.log('  - [null] test start.');
  company.salaryHigh(null);
  assert(company._salaryHigh === 0);
  console.log('  - [null] test success!');

  console.log('  - [not number] test start.');
  company.salaryHigh('aaa');
  assert(company._salaryHigh === 0);
  console.log('  - [not number] test success!');

  console.log('  - [range number] test start.');
  company.salaryHigh(99);
  assert(company._salaryHigh === 0);
  company.salaryHigh(10000);
  assert(company._salaryHigh === 0);
  company.salaryHigh(100);
  assert(company._salaryHigh === 100);
  company.salaryHigh(9999);
  assert(company._salaryHigh === 9999);
  console.log('  - [range number] test success!');

  console.log(' - SalaryHigh Test Success.\n');
}

function toJSONTest() {
  console.log(' - toJSON Test start.');
  const resultJson = {id: 'ID006', name: 'nobita manjyuu', overView: 'testes', workPlace: 'NY', employeeNum: 10, salaryLow: 200, salaryHigh: 300};
  const company = Company.create('ID006', 'nobita manjyuu');
  company.overView('testes');
  company.workPlace('NY');
  company.employeeNum(10);
  company.salaryLow(200);
  company.salaryHigh(300);
  assert(JSON.stringify(company.toJSON()) === JSON.stringify(resultJson));
  console.log(' - toJSON Test Success.\n');
}

function itemKeyTest() {
  console.log(' - itemKey Test start.');
  const company = Company.create('ID007', 'nobi nobita');
  company.itemKey = 'doraemon';
  assert(company.itemKey === 'doraemon');
  console.log(' - itemKey Test Success.\n');
}

console.log('- Test Start!');
idNullAndEmptyTest();
nameNullAndEmptyTest();
overViewTest();
workPlaceTest();
employeeNumTest();
salaryLowTest();
salaryHighTest();
toJSONTest();
itemKeyTest();
console.log('- All Test Clear!');
