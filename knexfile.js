// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://postgres:root@localhost/madingbm3'
  },
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL
    }
  
};
