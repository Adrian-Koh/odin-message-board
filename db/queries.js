const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessageFromId(id) {
  const { rows } = await pool.query(`SELECT * FROM messages WHERE id=${id}`);
  return rows[0];
}

async function insertMessage(message) {
  await pool.query(
    "INSERT INTO messages (username, text, added) VALUES ($1, $2, $3)",
    [message.username, message.text, message.added]
  );
}

module.exports = { getAllMessages, getMessageFromId, insertMessage };
