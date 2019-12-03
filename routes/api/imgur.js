const axios = require("axios");
const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');

router.get('/topPosts', (req, res) => {
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0.json')
        .then( images => {
            res.json({
                images: images.data.data
            })
        })
})

router.post('/search', (req, res) => {
    axios.get('')
})

module.exports = router;