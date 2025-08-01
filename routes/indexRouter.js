const { Router } = require("express");
const indexRouter = Router();
const messages = require("../messages");
const links = require("../links");

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages,
    links,
  });
});

module.exports = indexRouter;
