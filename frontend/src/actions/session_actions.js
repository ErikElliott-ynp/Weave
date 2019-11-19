import jwt_decode from 'jwt-decode';
import * as APIUtil from "../util/session_api_util";


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSIONS_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

export const receiveCurrentUser = currentUser => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }   
}

export const logoutUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

export const receiverErrors = errors => {
    return {
        type: RECEIVE_SESSIONS_ERRORS,
        errors
    }
}

export const signup = user => dispatch => {
    return APIUtil.signup(user)
        .then( user => dispatch(receiveCurrentUser(user))
        , err => dispatch(receiverErrors(err.response.data))
        )
};

export const login = user => dispatch => {
    return APIUtil.login(user)
        .then( res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            APIUtil.setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(receiveCurrentUser(decoded))
        },
        err => dispatch(receiverErrors(err.response.data))
        )
}


export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    return APIUtil.setAuthToken(false)
        .then( () => dispatch(logoutUser()));
};