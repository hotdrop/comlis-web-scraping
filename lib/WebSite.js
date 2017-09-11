const CREDS = require('../env/credentials.js')

class WebSite {

  static async create() {
    const webSite = new WebSite();
    return webSite;
  }

  constructor() {
    // TODO
    // 引数でurlを渡そうと思ったが、scraping関数の中身はそのサイトに特化した作りになるので
    // 別のURLを渡されても困るからURLは固定にする。
    this._url = CREDS.url;
  }

  async scraping(lastItemKey) {
    // lastItemKeyは空でも構わない

    // puppeteerかchromyを使ってスクレイピングする

    // 対象のWebサイトに移動する
    // ログイン処理を行う
    // 目的のページに遷移する

    // const companies = [];

    // ループ
      // サイトから必要な情報を取得
      // const company = new Company(id, name);
      // company.overView(xxx);
      // ・・・
      // companies.push(JSON.stringify(company))

    // return companies
  }
}

module.exports = WebSite;
