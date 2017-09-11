class Company {

  constructor(id, name) {
    // Error: NaN or undefined or empty
    this._id = id;
    this._name = name;
    this._overView = '';
    this._workPlace = '';
    this._employeeNum = 0;
    this._salaryLow = 0;
    this._salaryHigh = 0;
  }

  overView(text) {
    // Error: length over 200 chars
    this._overView = text;
  }

  workPlace(placeText) {
    // Error: length over 50 chars
    this._workPlace = placeText;
  }

  employeeNum(num) {
    // Error: outside 1 to 99999
    this._employeeNum = num;
  }

  salaryLow(numUnitMillion) {
    // Error: outside 100 to 9999
    this._salaryLow = numUnitMillion;
  }

  salaryHigh(numUnitMillion) {
    // Error: outside 100 to 9999
    this._salaryHigh = numUnitMillion;
  }

  toJSON() {
    return {
      id: this._id,
      name: this._name,
      overView: this._overView,
      workPlace: this._workPlace,
      employeeNum: this._employeeNum,
      salaryLow: this._salaryLow,
      salaryHigh: this._salaryHigh
    };
  }
}

module.exports = Company;
