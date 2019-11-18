import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions"

const SessionReducer = ( state = initialState, action ) => {
    switch (action.type) {
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