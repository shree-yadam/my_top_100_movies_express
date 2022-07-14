const express = require("express");
const router = express.Router();
const appUserDbHelper = require("../db/queries/appUserQueries");

module.exports = (db) => {

  router.post("/login", (req, res) => {
    console.log("In Login");
    appUserDbHelper.getUserByEmail(db, "abc@test.com")
    .then(user => {
      console.log(user);
      res.json(user);
    })
    .catch(err => {
      console.log(err);
      res.send("Login");
    });
  });

  router.post("/register", (req, res) => {
    res.send("Register");
  });

  return router;
}
