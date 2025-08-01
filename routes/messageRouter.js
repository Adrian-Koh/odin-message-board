const { Router } = require("express");
const messageRouter = Router();
const messages = require("../messages");

messageRouter.get("/:messageId", (req, res) => {
  const { messageId } = req.params;
  res.render("message", messages[messageId]);
});

module.exports = messageRouter;
