
import { RECEIVE_COMMENTS,  RECEIVE_NEW_COMMENT } from '../actions/comment_actions';

const CommentsReducer = (state = { all: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            newState.all = action.comments.data;
            return newState;
        case RECEIVE_NEW_COMMENT:
            newState.new = action.comment.data
            return newState;
        default:
            return state;
    }
};

export default CommentsReducer;