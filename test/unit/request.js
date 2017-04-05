const assert = require('assert');
const FMECloudAPI = require('../test_helper');
const sinon = require('sinon');
const PassThrough = require('stream').PassThrough;
const http = require('http');

describe('FMECloudAPI', function() {

    describe('request()', function(){

        beforeEach(function() {
            this.request = sinon.stub(http, 'request');
        });

        afterEach(function() {
            http.request.restore
        });

        it('converts the response to string', function() {
            var expected = '/somepath';
            var client = new FMECloudAPI();
            var request = new PassThrough();
            var response = new PassThrough();
            response.write(expected);
            response.end();
            this.request.callsArgWith(1, response).returns(request);
            return client.request('GET', expected).then(function(result) {
                assert.equal(result, expected)
            });
        });
    });
});
