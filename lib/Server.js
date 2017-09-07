'use strict'

const http = require('http');
const ENV = require('../env/settings');

class Server {

  static async create() {
    const server = new Server();
    return server;
  }

  constructor() {
    const apiRootUrl = ENV.host + ':' + ENV.port
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
          reject('Request Failed.\n' +
                  `   HTTP Status Code = ${statusCode} \n` +
                  `   Connect to URL = ${this._keyEndPoint} `);
        }

        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          rawData += chunk;
        })
        res.on('end', () => {
          resolve(rawData);
        });
      }).on('error', err => {
        reject(err);
      });
    });
  }
}

module.exports = Server;
