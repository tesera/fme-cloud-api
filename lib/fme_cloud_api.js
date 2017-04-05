'use strict';

const https = require('https');
const URL = require('url');

class FMECloudAPI {
    constructor(token, options) {
        this.token = token || process.env.TOKEN
        this.url = URL.parse('https://api.fmecloud.safe.com');
        this.version = options && options.version || 'v1';
    }

    request(method, path) {
        var options = {
            hostname: this.url.host,
            method: method || 'GET',
            path: path || this.url.path,
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        }

        return new Promise((resolve, reject) => {
            var req = https.request(options, (res) => {
                res.on('data', (data) => resolve(data.toString()));
            });

            req.on('error', reject);
            req.end();
        });
    }

    instances() {
        return this.request('GET', `/${this.version}/instances`);
    }

    start(instance) {
        return this.request('PUT', `/${this.version}/instances/${instance}/start`);
    }
}

module.exports = FMECloudAPI;
