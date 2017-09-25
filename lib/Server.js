const request = require('superagent');
const fs = require('fs');

const ENV = require('../env/settings');
const serverCert = fs.readFileSync('./env/server.crt');
const clientCert = fs.readFileSync('./env/client.crt');
const clientKey = fs.readFileSync('./env/client.key');

class Server {

  static async create() {
    return new Server();
  }

  constructor() {
    const apiRootUrl = 'https://' + ENV.host + ':' + ENV.port;
    this._keyEndPoint = apiRootUrl + ENV.keyApiEndPoint;
    this._companiesEndPoint = apiRootUrl + ENV.companiesApiEndPoint;
    // Currently, I use this env beacause I use a self signed certificate.
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
  }

  async doGetKey() {
    return new Promise((resolve, reject) => {
      request.get(this._keyEndPoint)
          .ca(serverCert)
          .cert(clientCert)
          .key(clientKey)
          .timeout({response: 5000, deadline: 60000,})
          .end((err, res) => {
            // res.ok: HTTP Status Code is 2XX.
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
      request.post(this._keyEndPoint)
          .ca(serverCert)
          .cert(clientCert)
          .key(clientKey)
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
      request.post(this._companiesEndPoint)
          .ca(serverCert)
          .cert(clientCert)
          .key(clientKey)
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
