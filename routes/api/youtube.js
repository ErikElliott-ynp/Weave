const axios = require("axios");
const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');

router.get('/youtubeMostPopular', (req, res) => {
    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${keys.youtubeApiKey}&chart=mostPopular&regionCode=US`)
    .then( videos => {
            res.json({
                videos: videos.data.items
            })
        })
})


router.post('/youtubeSearch', (req, res) => {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&q=${req.body.topic.topic}&type=video&key=${keys.youtubeApiKey}`)
        .then( videos => {
            res.json({
                videos: videos.data.items
            })
        })
})

module.exports = router