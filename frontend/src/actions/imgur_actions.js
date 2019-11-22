import * as ImgurUtil from "../util/imgur_util"

export const RECEIVE_ALL_IMGUR_POSTS = "RECEIVE_ALL_IMGUR_POSTS"
export const CLEAR_IMGUR = "CLEAR_IMGR";

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
  return ImgurUtil.fetchImgurTopPosts().then(posts => dispatch(receiveAllImgurPosts(posts)))};


//export const fetchPosts = () => dispatch => (
//     postUtil.fetchPosts().then(posts => dispatch(receivePosts(posts)))
// )