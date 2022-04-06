import knex from "knex";

require("dotenv").config();

const knexfile = require("./config");

const db = require("knex")({
  client: "pg",
  connection: {
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
  },
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
});

export default db;
