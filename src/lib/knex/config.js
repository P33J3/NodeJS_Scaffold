const dotenv = require('dotenv');

dotenv.config();

const mainConnection = 'postgres://mznxjyvg:GMBQ3jdoDUU6QPRtZK0Y5aa0DpopijWl@batyr.db.elephantsql.com/mznxjyvg';

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
