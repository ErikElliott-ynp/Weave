import * as RedditUtil from "../util/reddit_util"

export const RECEIEVE_ALL_REDDIT_POSTS = "RECEIVE_ALL_REDDIT_POSTS"

export const receiveAllRedditPosts = posts => ({
        type: 'RECEIEVE_ALL_REDDIT_POSTS',
        posts
})

export const fetchTopPosts = () => dispatch => {
  return RedditUtil.fetchRedditTopPosts().then(posts => dispatch(receiveAllRedditPosts(posts)))};


//export const fetchPosts = () => dispatch => (
//     postUtil.fetchPosts().then(posts => dispatch(receivePosts(posts)))
// )