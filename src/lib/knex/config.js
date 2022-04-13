const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

const mainConnection = '';

const DBURL = process.env.NODE_ENV === 'test' ? process.env.TEST_DB_URL : process.env.DB_URL;

const knexConfig = {
  client: 'pg',
  connection: DBURL || mainConnection,
  searchPath: ['knex', 'public'],
  migrations: {
    directory: '../../scripts/db/migrations',
  },
  seeds: {
    directory: '../../scripts/db/seeding',
  },
};

module.exports = knexConfig;
