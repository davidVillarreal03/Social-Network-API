const { connnect, connection } = require('mongoose');

const connectionString =
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-network-api';

connnect(connectionString);

module.exports = connection;