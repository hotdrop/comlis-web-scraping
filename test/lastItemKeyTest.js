const assert = require('assert');

function TestItem(id, date) {
  this.id = id;
  this.date = date;
}

/**
 * This test is for checking whether to the intended action when lastItemKey is set to the date.
 * 
 * Prerequisites
 *  nothing.
 */
(() => {

  const executeTest = ((items, lastItemKey, expectedTakeItemNum) => {
    const getLastItemKey = (items => {
      let lastItemDateEpoch = '';
      for (const item of items) {
        const parseDateEpoch = Date.parse(item.date);
        if (lastItemDateEpoch === '' || parseDateEpoch > lastItemDateEpoch)
          lastItemDateEpoch = parseDateEpoch;
      }
      return lastItemDateEpoch;
    });
    const retItems = [];
    for (const item of items) {
      const itemDateEpoch = Date.parse(item.date);
      if (itemDateEpoch > lastItemKey) {
        retItems.push(item);
        console.log(`    ID = ${item.id}  Date = ${item.date}`);
      }
    }

    assert(retItems.length === expectedTakeItemNum);
    return getLastItemKey(items);
  });

  console.log('- Test Start');
  const testItems = [];
  let lastItemKey = '';

  console.log(` - First Take Item start. lastItemKey = ${lastItemKey}`);
  testItems.push(new TestItem('001', '2017/09/14 00:00'));
  testItems.push(new TestItem('002', '2017/09/14 05:00'));
  testItems.push(new TestItem('003', '2017/09/14 10:00'));
  testItems.push(new TestItem('004', '2017/09/14 15:00'));
  testItems.push(new TestItem('005', '2017/09/14 20:00'));
  lastItemKey = executeTest(testItems, lastItemKey, 5);

  console.log(` - Second Take Item start. lastItemKey = ${lastItemKey}`);
  testItems.push(new TestItem('006', '2017/09/14 23:00'));
  testItems.push(new TestItem('007', '2017/09/15 05:00'));
  testItems.push(new TestItem('008', '2017/09/15 10:00'));
  lastItemKey = executeTest(testItems, lastItemKey, 3);

  console.log(` - Third Take Item start. lastItemKey = ${lastItemKey}`);
  testItems.push(new TestItem('010', '2017/09/15 10:10'));
  lastItemKey = executeTest(testItems, lastItemKey, 1);

  console.log(` - Fourth Take Item start. lastItemKey = ${lastItemKey}`);
  lastItemKey = executeTest(testItems, lastItemKey, 0);

  console.log('- Test Success!');
})();
