import {getComments, writeComment } from '../util/comments_util'

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";
// export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS'

debugger;
export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});


export const receiveNewComment = comment => ({
    type: RECEIVE_NEW_COMMENT,
    comment
})

// export const receiveCommentErrors = errors => ({
//         type: RECEIVE_COMMENT_ERRORS,
//         errors
// })

export const fetchComments = () => dispatch => (
    getComments()
        .then(comments => dispatch(receiveComments(comments)))
        // errors => dispatch(receiveCommentErrors(errors))
);


export const composeComment = data => dispatch => (
    writeComment(data)
        .then(comment => dispatch(receiveNewComment(comment)))
        // errors => dispatch(receiveCommentErrors(errors))
);
