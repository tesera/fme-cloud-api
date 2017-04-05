
const FMECloudAPI = require('./lib/fme_cloud_api');

var client = new FMECloudAPI('mytoken');
client.instances().then(console.log);


