// require("dotenv").config();

require("dotenv").config({ path: require("find-config")(".env") });

//dotenv.config();

// const connection = {
//   host: process.env.PGHOST,
//   port: process.env.PGPORT,
//   database: process.env.PGDATABASE,
//   user: process.env.PGUSER,
//   password: process.env.PGPASSWORD,
// };

// const localConnection = {
//   host: process.env.LOCALHOST,
//   port: process.env.LOCALPORT,
//   database: process.env.LOCALDB,
//   user: process.env.LOCALUSER,
//   password: process.env.LOCALPASS,
// };

console.log(process.env.LOCALDB);

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: process.env.LOCALHOST,
      port: process.env.LOCALPORT,
      database: process.env.LOCALDB,
      user: process.env.LOCALUSER,
      password: process.env.LOCALPASS,
    },
    migrations: {
      directory: "../../scripts/db/migrations",
    },
    seeds: {
      directory: "../../scripts/db/seeding",
    },
  },
};

// const knexConfig = {
//   client: "postgresql",
//   localConnection,
//   migrations: {
//     directory: "../../scripts/db/migrations",
//   },
//   seeds: {
//     directory: "../../scripts/db/seeding",
//   },
// };

// module.exports = knexConfig;
