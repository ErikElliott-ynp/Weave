import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_USER_SIGN_IN } from "../actions/session_actions"

const initialState ={
    isAuthenicated: false,
    user: {}
}

const SessionReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                ...state,
                isAuthenicated: !!action.currentUser,
                user: action.RECEIVE_CURRENT_USER
            }
        case LOGOUT_CURRENT_USER:
            return {
                isAuthenicated: false,
                user: undefined
            }
        default:
            return state;
    }
}

export default SessionReducer