const { Router } = require("express");
const newMessageRouter = Router();
const db = require("../db/queries");
const links = require("../links");

newMessageRouter.get("/", (req, res) => {
  res.render("form", { links });
});

async function newMessage(req, res) {
  const { username, text } = req.body;
  await db.insertMessage({ username, text, added: new Date() });
  res.redirect("/");
}

newMessageRouter.post("/", newMessage);

module.exports = newMessageRouter;
