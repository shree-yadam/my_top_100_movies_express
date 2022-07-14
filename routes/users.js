const { Console } = require("console");
const express = require("express");
const router = express.Router();
const appUserDbHelper = require("../db/queries/appUserQueries");

module.exports = (db) => {

  router.post("/login", (req, res) => {
    console.log("In Login");
    const {email, password} = req.body;
    appUserDbHelper.getUserByEmail(db, email)
    .then(user => {
      if(user.password == password) {
        console.log(`Logged in as ${user.name}`);
        res.send(`Logged in as ${user.name}`);
        return;
      }
      res.send("Invalid Login");
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
