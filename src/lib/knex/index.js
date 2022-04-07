// const db = require("knex")({
//   client: "pg",
//   connection: process.env.PG_CONNECTION_STRING,
//   searchPath: ["knex", "public"],
// });

import knex from "knex";
import knexfile from "./config";

const db = knex(knexfile.development);

export default db;
