[![codeship][2]][1]

# FME Cloud API

run `npm install fme-cloud-manager` then:

    var token = 'mytoken';
    var client = require('fme-cloud-api')(token);
    client.instances.then(console.log);

  [1]: https://www.codeship.io/projects/211734/
  [2]: https://img.shields.io/codeship/05578930-fc4f-0134-bf78-5a7bbc9ec5df.svg
