class Company {

  static create(id, name) {
    if (!id || !name) {
      console.log(`  Error! ID or name is null. you set id=${id}, name=${name} `);
      return null;
    }
    return new Company(id, name);
  }

  constructor(id, name) {
    this._id = id;
    this._name = name;
    this._overview = '';
    this._workPlace = '';
    this._employeesNum = 0;
    this._salaryLow = 0;
    this._salaryHigh = 0;
  }

  set overview(text) {
    if (!text)
      return;

    const MAX_LENGTH = 200;
    if (text.length <= MAX_LENGTH) {
      this._overview = text;
    } else {
      console.log('  Warning! OverView text length over max length. \n' +
                  `     Max length = ${MAX_LENGTH}, you set length = ${text.length} \n` +
                  '     set the truncated overView after the max length. ');
      this._overview = text.substring(0, MAX_LENGTH);
    }
  }

  set workPlace(placeText) {
    if (!placeText)
      return;

    const MAX_LENGTH = 50;
    if (placeText.length <= MAX_LENGTH) {
      this._workPlace = placeText;
    } else {
      console.log('  Warning! WorkPlace text length over max length. \n' +
                  `     Max length = ${MAX_LENGTH}, you set length = ${placeText.length} \n` +
                  '     set the truncated workPlace after the max length. ');
      this._workPlace = placeText.substring(0, MAX_LENGTH);
    }
  }

  set employeesNum(num) {
    if (!num)
      return;

    if (Number.isFinite(num) && (num >= 0 && num <= 99999)) {
      this._employeesNum = num;
    } else {
      console.log('  Warning! Set employeesNum is unexpected. \n' +
                  `     Expected number: 0〜99999, you set number = ${num} `);
    }
  }

  set salaryLow(numUnitMillion) {
    if (!numUnitMillion)
      return;

    if (Number.isFinite(numUnitMillion) && (numUnitMillion >= 100 && numUnitMillion <= 9999)) {
      this._salaryLow = numUnitMillion;
    } else {
      console.log('  Warning! Set salaryLow is unexpected. \n' +
                  `     Expected number: 100〜9999, you set number = ${numUnitMillion} `);
    }
  }

  set salaryHigh(numUnitMillion) {
    if (!numUnitMillion)
      return;

    if (Number.isFinite(numUnitMillion) && (numUnitMillion >= 100 && numUnitMillion <= 9999)) {
      this._salaryHigh = numUnitMillion;
    } else {
      console.log('  Warning! Set salaryHigh is unexpected. \n' +
                  `     Expected number: 100〜9999, you set number = ${numUnitMillion} `);
    }
  }

  set itemKey(val) {
    this._itemKey = val;
  }

  get itemKey() {
    return this._itemKey;
  }

  toJSON() {
    return {
      id: this._id,
      name: this._name,
      overview: this._overview,
      workPlace: this._workPlace,
      employeesNum: this._employeesNum,
      salaryLow: this._salaryLow,
      salaryHigh: this._salaryHigh
    };
  }
}

module.exports = Company;
