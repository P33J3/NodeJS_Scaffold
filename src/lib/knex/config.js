require("dotenv").config();

// const connection = {
//   host: process.env.PGHOST,
//   port: process.env.PGPORT,
//   database: process.env.PGDATABASE,
//   user: process.env.PGUSER,
//   password: process.env.PGPASSWORD,
// };

const knexConfig = {
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
};

// }module.exports = {
//   knexConfig : {
//     client: "pg",
//     connection: connection || process.env.PG_CONNECTION_STRING,
//     migrations: {
//       directory: "../../scripts/db/migrations",
//       tableName: "users",
//     },
//     seeds: {
//       directory: "../../scripts/db/seeding",
//     },
//   };
// }

module.exports = knexConfig;
