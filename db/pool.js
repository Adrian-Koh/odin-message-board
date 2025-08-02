const { Pool } = require("pg");
require("dotenv").config();

module.exports = new Pool({
  connectionString: `postgresql://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@maglev.proxy.rlwy.net:35493/railway`,
});
