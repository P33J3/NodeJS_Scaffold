import dotenv from 'dotenv';

dotenv.config();

// const connection = {
//   host: process.env.PGHOST,
//   port: process.env.PGPORT,
//   database: process.env.PGDATABASE,
//   user: process.env.PGUSER,
//   password: process.env.PGPASSWORD,
// };

const knexConfig = {
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: ['knex', 'public'],
  migrations: {
    directory: '../../scripts/db/migrations',
  },
  seeds: {
    directory: '../../scripts/db/seeding',
  },
};

export default knexConfig;
