const { Router } = require("express");
const indexRouter = Router();
const db = require("../db/queries");
const links = require("../links");

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", {
    title: "Mini Messageboard",
    messages,
    links,
  });
}

indexRouter.get("/", getMessages);

module.exports = indexRouter;
