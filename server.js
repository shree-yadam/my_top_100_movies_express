const express = require("express");
const logger = require("morgan");
const userRouter = require("./routes/users");
require("dotenv").config();
const db = require("./db/index");
const cors = require("cors");

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(cors());
app.use("/users", userRouter(db));

app.get("/", (req, res) => {
  res.send("Setup Done!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;