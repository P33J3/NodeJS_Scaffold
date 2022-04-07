require("dotenv").config();

//  process.env.PG_CONNECTION_STRING ||
const connection = {
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
};

// const knexConfig =

module.exports = {
  development: {
    client: "pg",
    connection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "../../scripts/db/migrations",
      tableName: "users",
    },
    seeds: {
      directory: "../../scripts/db/seeding",
    },
  },
};

//module.exports = knexConfig;
