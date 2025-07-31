const { Router } = require("express");
const newMessageRouter = Router();
const messages = require("../messages");
const links = require("../links");

newMessageRouter.get("/", (req, res) => {
  res.render("form", { links });
});

newMessageRouter.post("/", (req, res) => {
  const { user, text } = req.body;
  messages.push({ user, text, added: new Date() });
  res.redirect("/");
});

module.exports = newMessageRouter;
