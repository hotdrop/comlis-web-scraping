const CREDS = require('../env/credentials.js');

class WebSite {

  static async create() {
    return new WebSite();
  }

  constructor() {
    this._url = CREDS.url;
  }

  /**
   * 対象のWebサイトをスクレイピングする処理を行う。
   * @param  {String}  lastItemKey
   * @return {Array<Company>}
   */
  async scraping(lastItemKey) {
  }

  /**
   * LastItemKeyを取得する。
   * ItemKeyの仕様はWebSite.jsしか知らないため、scraping結果のArrayを渡してここで取得する。
   * @param  {Array<Company>} companies
   * @return {String}
   */
  getlastItemKey(companies) {
  }
}

module.exports = WebSite;
