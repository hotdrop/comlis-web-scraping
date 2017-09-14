const assert = require('assert');
const Company = require('../lib/model/Company.js');

function idNullAndEmptyTest() {
  console.log(' ID Null and Empty Test Start');
  assert(Company.create(null, 'Test1') === null);
  assert(Company.create('', 'Test2') === null);
  console.log(' ID Test Success\n');
}

function nameNullAndEmptyTest() {
  console.log(' Name Null and Empty Test Start');
  assert(Company.create('ID001', null) === null);
  assert(Company.create('ID001', '') === null);
  console.log(' Name Test Success\n');
}

function overViewTest() {
  console.log(' OverView Test. Run 2 type of test.');
  const company = Company.create('ID001', 'shield');

  console.log('  [null test start]');
  company.overView(null);
  assert(company._overView === '');
  console.log('  [null test success!]');

  console.log('  [max length test start]');
  const makeStrByLength = function(length) {
    let str = '';
    for (let i = 1; i <= length; i++)
      str += 'a';
    return str;
  };

  const overLenghtStr = makeStrByLength(201);
  company.overView(overLenghtStr);
  assert(company._overView.length === 200);

  const maxLengthStr = makeStrByLength(200);
  company.overView(maxLengthStr);
  assert(company._overView.length === 200);
  console.log('  [max length test success!]');

  console.log(' OverView Test Success\n');
}

console.log('- Test Start');
idNullAndEmptyTest();
nameNullAndEmptyTest();
overViewTest();
console.log('- Test End');
