const assert = require('assert');
const Company = require('../lib/model/Company.js');

function idNullAndEmptyTest() {
  console.log(' ID Null and Empty Test Start');
  let company = Company.create(null, 'Test1');
  assert(company === null);
  company = Company.create('', 'Test2');
  assert(company === null);
  console.log(' ID Test Success\n');
}

function nameNullAndEmptyTest() {
  console.log(' Name Null and Empty Test Start');
  let company = Company.create('ID001', null);
  assert(company === null);
  company = Company.create('ID001', '');
  assert(company === null);
  console.log(' Name Test Success\n');
}

console.log('- Test Start');
idNullAndEmptyTest();
nameNullAndEmptyTest();
console.log('- Test End');
