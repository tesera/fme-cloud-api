'use strict';

class FMECloudAPI {
    constructor(token) {
        this.token = token || process.env.TOKEN
    }
}

module.exports = FMECloudAPI;
