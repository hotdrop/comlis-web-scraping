const superagent = require('superagent');
const ENV = require('../env/settings');

class Server {

  static async create() {
    return new Server();
  }

  constructor() {
    // TODO 実装が落ち着いたらhttpsにする。
    const apiRootUrl = 'http://' + ENV.host + ':' + ENV.port;
    this._keyEndPoint = apiRootUrl + ENV.keyApiEndPoint;
    this._companiesEndPoint = apiRootUrl + ENV.companiesApiEndPoint;
  }

  async doGetKey() {
    return new Promise((resolve, reject) => {
      superagent.get(this._keyEndPoint)
          .timeout({response: 5000, deadline: 60000,})
          .end((err, res) => {
            // res.ok: HTTP Status Code = 200番台
            if (!err && res.ok)
              resolve(res.text);
            else if (err.timeout)
              reject(`  Connect time out! URL = ${this._keyEndPoint} `);
            else
              reject(err);
          });
    });
  }

  async doPostKey(key) {
    return new Promise((resolve, reject) => {
      superagent.post(this._keyEndPoint)
          .type('text')
          .send(key)
          .end((err, res) => {
            if (!err && res.ok)
              resolve('Success');
            else
              reject(err);
          });
    });
  }

  async doPostCompanies(companies) {
    return new Promise((resolve, reject) => {
      superagent.post(this._companiesEndPoint)
          .type('json')
          .send(companies)
          .end((err, res) => {
            if (!err && res.ok)
              resolve('Success');
            else
              reject(err);
          });
    });
  }
}

module.exports = Server;
