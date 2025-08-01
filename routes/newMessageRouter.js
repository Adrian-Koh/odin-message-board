const { Router } = require("express");
const newMessageRouter = Router();
const messages = require("../messages");
const links = require("../links");

newMessageRouter.get("/", (req, res) => {
  res.render("form", { links });
});

newMessageRouter.post("/", (req, res) => {
  const { user, text } = req.body;
  const newId = messages[messages.length - 1].id + 1;
  messages.push({ id: newId, user, text, added: new Date() });
  res.redirect("/");
});

module.exports = newMessageRouter;
