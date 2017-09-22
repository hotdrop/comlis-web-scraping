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
    this._url = '';
    this._dateEpoch = 0;
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

  set url(url) {
    if (!url)
      return;

    // More better check using validURL Library.
    if (url.indexOf('http://') === 0 || url.indexOf('https://') === 0) {
      this._url = url;
    } else {
      console.log('  Warning! Set url is unexpected. \n' +
                  `      URL must start with http or https. you set url = ${url} `);
    }
  }

  set itemKey(val) {
    this._itemKey = val;
  }

  get itemKey() {
    return this._itemKey;
  }

  set dateEpoch(val) {
    this._dateEpoch = val;
  }

  toJSON() {
    return {
      id: this._id,
      name: this._name,
      overview: this._overview,
      workPlace: this._workPlace,
      employeesNum: this._employeesNum,
      salaryLow: this._salaryLow,
      salaryHigh: this._salaryHigh,
      url: this._url,
      dateEpoch: this._dateEpoch
    };
  }
}

module.exports = Company;
