const assert = require('assert');
const FMECloudAPI = require('../test_helper');

describe('FMECloudAPI', function() {
    describe('constructor()', function() {
        it('reads the token from process.env', function() {
            var expected = process.env.TOKEN = 'envtoken';

            var client = new FMECloudAPI();
            assert.equal(client.token, expected);
        });

        it('overrides the env token when it is supplied directly', function() {
            process.env.TOKEN = 'envtoken';
            var expected = 'paramtoken';

            var client = new FMECloudAPI(expected);
            assert.equal(client.token, expected);
        });
    });
});
