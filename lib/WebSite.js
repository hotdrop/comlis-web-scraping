const puppeteer = require('puppeteer');
const Company = require('./model/Company.js');
const CREDS = require('../env/credentials.js');

class WebSite {

  static async create() {
    return new WebSite();
  }

  constructor() {
    this._url = '[your target url]';
  }

  /**
   * This function is incomplete!
   * Please implements as you like.
   * @param  {String}  lastItemKey
   * @return {Array<Company>}
   */
  async scraping(lastItemKey) {
  }

  /**
   * Since ItemKey's specification only knows WebSite.js,
   * argument in Array of scraping result and get it here.
   * @param  {Array<Company>} companies
   * @return {String}
   */
  getLastItemKey(companies) {
  }
}

module.exports = WebSite;
