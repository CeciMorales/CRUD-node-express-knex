// Update with your config settings.
const dotenv = require('dotenv');
dotenv.config();

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      port:'3306',
      database:'hello_mvc_node',
      user:'root',
      password:'root'
    }, 
    pool: {
      min:2,
      max:10
    },
    migations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
      client: 'mysql2',
      connection: {
      host: '127.0.0.1',
      port: '3306',
      database: 'hello_mvc_node',
      user:     'root',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      port: '3306',
      database: 'hello_mvc_node',
      user:     'root',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
