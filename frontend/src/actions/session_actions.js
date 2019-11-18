import jwt_decode from 'jwt-decode';
import * as APIUtil from "../util/session_api_util";


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSIONS_ERRORS = "RECEIVE_SESSION_USER";

export const logout = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}