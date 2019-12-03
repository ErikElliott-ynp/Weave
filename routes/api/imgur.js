const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get('/topPosts', (req, res) => {
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0.json')
        .then( images => {
            res.json({
                images: images.data.data
            })
        })
})

router.post('/search', (req, res) => {
    axios.get(`https://api.imgur.com/3/gallery/search/viral/day/0?q=cats`)
        .then( images => {
            res.json({
                images: images.data.data
            })
        })
})

module.exports = router;