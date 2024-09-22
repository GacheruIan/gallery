var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://gacheruian:qwerty1234@ikcluster.1wcfe.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://gacheruian:qwerty1234@ikcluster.1wcfe.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://gacheruian:qwerty1234@ikcluster.1wcfe.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}

module.exports = config;
