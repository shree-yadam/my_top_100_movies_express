const express = require("express");
const router = express.Router();
const axios = require("axios");

module.exports = () => {

  router.get("/", (req, res) => {
    let url = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.API_KEY_v3_AUTH}`;
    axios.get(url)
    .then(response => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(err => {
      console.log(err);
    });
  });

  return router;
}