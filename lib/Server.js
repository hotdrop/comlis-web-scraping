'use strict'

const http = require('http');
const ENV = require('../env/settings');

class Server {

  static async create() {
    const server = new Server();
    return server;
  }

  constructor() {
    const apiRootUrl = 'http://' + ENV.host + ':' + ENV.port;
    this._keyEndPoint = apiRootUrl + ENV.keyApiEndPoint;
    this._companiesEndPoint = apiRootUrl + ENV.companiesApiEndPoint;
  }

  async doGetKey() {
    return new Promise((resolve, reject) => {
      http.get(this._keyEndPoint, (res) => {

        const { statusCode } = res;
        let rawData = '';

        // no content
        if(statusCode === 204) {
          resolve(rawData);
          return;
        } else if(statusCode !== 200) {
          res.resume();
          reject('  Request Failed.\n' +
                  `    HTTP Status Code = ${statusCode} \n` +
                  `    Connect to URL = ${this._keyEndPoint} `);
        }

        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          rawData += chunk;
        })
        res.on('end', () => {
          resolve(rawData);
        });
      }).on('error', (err) => {
        reject(err);
      });
    });
  }

  async doPostKey(key) {

    const options = {
      hostname: ENV.host,
      port: ENV.port,
      path: ENV.keyApiEndPoint,
      method: 'POST',
      headers: {
        // TODO この指定だとkeyの末尾に=が入るためheadersは見直す。
        //'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(key)
      }
    };

    return new Promise((resolve, reject) => {
      const req = http.request(options, (res) => {

        console.log(`  STATUS: ${res.statusCode}`);
        console.log(`  HEADERS: ${JSON.stringify(res.headers)}`);

        res.setEncoding('utf8');
        res.on('data', (chunk) => {});
        res.on('end', () => {
          resolve('Success');
        });
      }).on('error', (err) => {
        reject(err);
      });

      req.write(key);
      req.end();
    });
  }
}

module.exports = Server;
