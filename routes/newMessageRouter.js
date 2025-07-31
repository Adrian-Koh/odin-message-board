const { Router } = require("express");
const newMessageRouter = Router();
const messages = require("../messages");

newMessageRouter.get("/", (req, res) => {
  res.render("form");
});

newMessageRouter.post("/", (req, res) => {
  const { user, text } = req.body;
  messages.push({ user, text, added: new Date() });
  res.redirect("/");
});

module.exports = newMessageRouter;
