import { RECEIVE_ALL_IMGUR_POSTS, CLEAR_IMGUR } from "../actions/imgur_actions";

const imgurReducer = (
  state = [],
  action
) => {
  Object.freeze(state);
  let newState = Object.assign([], state);
  switch (action.type) {
      case RECEIVE_ALL_IMGUR_POSTS:
          return action.posts;
          debugger
      case CLEAR_IMGUR:
          return [];
    default:
      return state;
  }
};

export default imgurReducer;
