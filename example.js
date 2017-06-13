
const FMECloudAPI = require('./lib/fme_cloud_api');

// Connect to API
var client = new FMECloudAPI('mytoken');

// List instances
client.instances().then(console.log).catch(console.error);

// Start an instance
client.start(2397);

// Pause an instance
client.pause(2397);

// Get an instance
client.instance(2397).then(console.log).catch(console.error)
