// Allows us to use ES6 in our migrations and tests.
require('babel-register');

module.exports = {
    networks: {
        ropsten: {
            network_id: 3,
            host: 'localhost',
            gas: 4612388,
            port: 8545,
        },
        development: {
            host: 'localhost',
            port: 8545,
            network_id: '*'
        }
    }
};
