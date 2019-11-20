import axios from "axios";

export const fetchRedditTopPosts = () =>
       { return axios.get("https://api.imgur.com/3/gallery/hot/viral/0.json");};
