const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@maglev.proxy.rlwy.net:35493/railway`,
});
