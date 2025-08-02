const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessageFromId(id) {
  const { rows } = await pool.query(`SELECT * FROM messages WHERE id=${id}`);
  return rows[0];
}

module.exports = { getAllMessages, getMessageFromId };
