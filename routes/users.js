const express = require("express");
const router = express.Router();
const appUserDbHelper = require("../db/queries/appUserQueries");
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (db) => {

  router.post("/login", (req, res) => {
    const {email, password} = req.body;
    appUserDbHelper.getUserByEmail(db, email)
    .then(user => {
      if(!user || !bcrypt.compareSync(password, user.password)) {
        res.status(401).send("Invalid Login");
        return;
      }
      res.send(`Logged in as ${user.name}`);
    })
    .catch(err => {
      console.log(err);
      res.send("Login");
    });
  });

  router.post("/register", (req, res) => {
    const user = req.body;
    if(!(user.email || user.password || user.name)) {
      res.status(400).send("All fields required");
      return;
    }

    appUserDbHelper.getUserByEmail(db, user.email)
    .then(existingUser => {
      if(existingUser) {
        res.status(400).send("email already in use!");
        return;
      }
      user.password = bcrypt.hashSync(user.password, saltRounds);
      return appUserDbHelper.addUser(db, user);
    })
    .then(addedUser => {
      if(!addedUser) {
        res.status(500).send("Error adding User");
        return;
      }
      res.send("User Logged in");
    })
    .catch(err => {
      console.log("Err");
      res.status(500).send("Error");
    });
  });

  return router;
}
