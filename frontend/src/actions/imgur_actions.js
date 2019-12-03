import * as ImgurUtil from "../util/imgur_util"

export const RECEIVE_ALL_IMGUR_POSTS = "RECEIVE_ALL_IMGUR_POSTS"
export const CLEAR_IMGUR = "CLEAR_IMGUR";

export const receiveAllImgurPosts = posts => ({
        type: RECEIVE_ALL_IMGUR_POSTS,
        posts
});

export const clearImgur = () => {
  return {
    type: CLEAR_IMGUR
  }
}

export const fetchTopImgur = () => dispatch => {
  return ImgurUtil.backendImgurTop()
    .then(posts => dispatch(receiveAllImgurPosts(posts.data.images)))};


export const fetchImgurSearch = topic =>  dispatch => {
  return ImgurUtil.backendImgurSearch(topic)
    .then( posts => dispatch(receiveAllImgurPosts(posts)))
}