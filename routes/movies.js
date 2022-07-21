const express = require("express");
const router = express.Router();
const axios = require("axios");

module.exports = () => {

  let base_url = "";
  let url = `https://api.themoviedb.org/3/configuration?api_key=${process.env.API_KEY_v3_AUTH}`;
    axios.get(url)
    .then(response => {
      base_url = response.data.images.base_url;
    })
    .catch(err => {
      console.log(err);
    });
  router.get("/", (req, res) => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY_v3_AUTH}`;
    axios.get(url)
    .then(response => {
      let movieData = [...(response.data.results)];
      let resData = movieData.map(m => {
        return {title: m.title, description: m.overview, img_url: `${base_url}original${m.poster_path}`};
      });
      res.json(resData);
    })
    .catch(err => {
      console.log(err);
    });
  });

  return router;
}