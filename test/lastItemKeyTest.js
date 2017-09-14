const assert = require('assert');

// テストデータ作成
const testItems = [];
testItems.push(new TestItem('001', '2017/09/14 00:00'));
testItems.push(new TestItem('002', '2017/09/14 05:00'));
testItems.push(new TestItem('003', '2017/09/14 10:00'));
testItems.push(new TestItem('004', '2017/09/14 15:00'));
testItems.push(new TestItem('005', '2017/09/14 20:00'));

let lastItemKey = '';

console.log('- Test Start');
console.log(` - First Take Item start. LastItemKey = ${lastItemKey}`);
const firstTakeList = takeItems(lastItemKey);
for (const item of firstTakeList)
  console.log(`    ID = ${item.id}  Date = ${item.date}`);
assert(firstTakeList.length === 5);
lastItemKey = getLastItemKey(firstTakeList);

testItems.push(new TestItem('006', '2017/09/14 23:00'));
testItems.push(new TestItem('007', '2017/09/15 05:00'));
testItems.push(new TestItem('008', '2017/09/15 10:00'));

console.log(` - Second Take Item start. LastItemKey = ${lastItemKey}`);
const secondTakeList = takeItems(lastItemKey);
for (const item of secondTakeList)
  console.log(`    ID = ${item.id}  Date = ${item.date}`);
assert(secondTakeList.length === 3);
lastItemKey = getLastItemKey(secondTakeList);

testItems.push(new TestItem('010', '2017/09/15 10:10'));
console.log(` - Third Take Item start. LastItemKey = ${lastItemKey}`);
const thirdTakeList = takeItems(lastItemKey);
for (const item of thirdTakeList)
  console.log(`    ID = ${item.id}  Date = ${item.date}`);
assert(thirdTakeList.length === 1);
lastItemKey = getLastItemKey(thirdTakeList);

console.log(` - Fourth Take Item start. LastItemKey = ${lastItemKey}`);
const fourthTakeList = takeItems(lastItemKey);
assert(fourthTakeList.length === 0);
console.log('  Success!');

function TestItem(id, date) {
  this.id = id;
  this.date = date;
}

function takeItems(lastItemDateEpoch) {
  const retItems = [];
  for (const testItem of testItems) {
    const itemDateEpoch = Date.parse(testItem.date);
    if (itemDateEpoch > lastItemDateEpoch)
      retItems.push(testItem);
  }
  return retItems;
}

function getLastItemKey(items) {
  let lastItemDateEpoch = '';
  for (const item of items) {
    const parseDateEpoch = Date.parse(item.date);
    if (lastItemDateEpoch === '' || parseDateEpoch > lastItemDateEpoch)
      lastItemDateEpoch = parseDateEpoch;
  }
  return lastItemDateEpoch;
}
