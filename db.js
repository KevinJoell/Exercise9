const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "291020",
  host: "localhost",
  port: 5432, // default Postgres port
  database: "backEnd",
});
module.exports = {
  query: (text, params) => pool.query(text, params),
};
