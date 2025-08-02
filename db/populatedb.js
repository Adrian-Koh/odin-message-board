const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255),
  text VARCHAR(255),
  added timestamp with time zone
);

INSERT INTO messages (username, text, added) 
VALUES
  ('Stewart', 'The world is great.', CURRENT_TIMESTAMP),
  ('Lois', 'The world is on fire.', CURRENT_TIMESTAMP),
  ('Peter', 'The world is my oyster.', CURRENT_TIMESTAMP);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@maglev.proxy.rlwy.net:35493/railway`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
