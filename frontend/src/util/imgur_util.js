import axios from "axios";

export const fetchImgurTopPosts = () =>
       { return axios.get("https://api.imgur.com/3/gallery/hot/viral/0.json");};
