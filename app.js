const path = require("node:path");
const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
