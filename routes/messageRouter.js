const { Router } = require("express");
const messageRouter = Router();
const messages = require("../messages");
const links = require("../links");

messageRouter.get("/:messageId", (req, res) => {
  const { messageId } = req.params;
  res.render("message", { ...messages[messageId], links });
});

module.exports = messageRouter;
