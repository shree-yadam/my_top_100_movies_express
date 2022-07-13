const express = require("express");
const router = express.Router();

module.exports = () => {

  router.post("/login", (req, res) => {
    res.send("Login");
  });

  router.post("/register", (req, res) => {
    res.send("Register");
  });

  return router;
}
