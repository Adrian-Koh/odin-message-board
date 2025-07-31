const path = require("node:path");
const express = require("express");
const app = express();

const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

const PORT = 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
