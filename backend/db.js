const knex = require('knex');

const url = process.env.NODE_ENV === 'development' ? '' : '127.0.0.1';

const db = knex({
  client: 'mysql',
  connection: {
    host: url,
    user: 'root',
    password: 'password',
    database: 'user_management',
    // ssl: true,
  },
});

module.exports = db;
