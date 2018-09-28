const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile');
const environmentConfig = config.development; 
const knex = require('knex');
const connection = knex(environmentConfig);

module.exports = connection;