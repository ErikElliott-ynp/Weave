import { RECEIEVE_ALL_REDDIT_POSTS } from "../actions/reddit_actions";

const redditReducer = (
  state = {},
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIEVE_ALL_REDDIT_POSTS:
      newState.concat(action.posts.data.data)
      return newState;
    default:
      return state;
  }
};

export default redditReducer;
