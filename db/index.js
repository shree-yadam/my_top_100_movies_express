const { Pool } = require('pg')
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PSWD);
console.log(process.env.DB_NAME);
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PSWD,
  database: process.env.DB_NAME,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = pool;