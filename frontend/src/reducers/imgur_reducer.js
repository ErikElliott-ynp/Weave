import { RECEIVE_ALL_IMGUR_POSTS } from "../actions/imgur_actions";

const redditReducer = (
  state = [],
  action
) => {
  Object.freeze(state);
  let newState = Object.assign([], state);
  switch (action.type) {
      case RECEIVE_ALL_IMGUR_POSTS:
          return newState.concat(action.posts.data.data)
    default:
      return state;
  }
};

export default redditReducer;
