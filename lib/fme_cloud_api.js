'use strict';

const https = require('https');
const URL = require('url');

class FMECloudAPI {
    constructor(token, options) {
        this.token = token || process.env.TOKEN
        this.url = URL.parse('https://api.fmecloud.safe.com');
        this.version = options && options.version || 'v1';
    }

    instances() {
        return this.get(`/${this.version}/instances`);
    }

    get(path) {
        var options = {
            hostname: this.url.host,
            method: 'GET',
            path: path || this.url.path,
            headers: {
                Authorization: 'Bearer 8447ea34a74e3f705ce18c76bbc94c086700844fd4f7f06424867427e4e997e8'
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
}

module.exports = FMECloudAPI;
