const axios = require("axios");
const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');

router.get('/popularNews', (req, res) => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${keys.newsApiKey}`)
        .then( news => {
            res.json({
                news: news.data.articles
            })
        })
})

router.post('/newsSearch', (req, res) => {
    let url = `https://newsapi.org/v2/everything?` +
        `q=${req.body.topic}&sortBy=relevance&`
        + `apiKey=${keys.newsApiKey}`;
    axios.get(url)
        .then( response => {
            res.json({
                news: response.data.articles
            })
        })
})

module.exports = router