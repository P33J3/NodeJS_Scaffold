require("dotenv").config({ path: require("find-config")(".env") });

const knex = require("knex");
const knexfile = require("./config");

//import knexConfig from "./config";
// dotenv.config();

const db = knex(knexfile.development);
module.exports = db;

// knexConfig = knexConfig.localConnection;
//
// const db = require("knex")({
//   client: "pg",
//   // connection: process.env.PG_CONNECTION_STRING,
//   connection: knexConfig,
//   searchPath: ["knex", "public"],
// });

// export default db;
