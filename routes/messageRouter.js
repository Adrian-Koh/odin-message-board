const { Router } = require("express");
const messageRouter = Router();
const links = require("../links");
const db = require("../db/queries");

async function getMessageInfo(req, res) {
  const { messageId } = req.params;
  const message = await db.getMessageFromId(messageId);
  res.render("message", { message, links });
}

messageRouter.get("/:messageId", getMessageInfo);

module.exports = messageRouter;
