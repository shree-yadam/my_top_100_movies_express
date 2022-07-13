const express = require("express");
const logger = require("morgan");

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.send("Setup Done!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});