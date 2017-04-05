
const FMECloudAPI = require('./lib/fme_cloud_api');

var client = new FMECloudAPI('8447ea34a74e3f705ce18c76bbc94c086700844fd4f7f06424867427e4e997e8');
client.instances().then(console.log);


