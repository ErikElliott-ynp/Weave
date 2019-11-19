import { RECEIVE_SESSIONS_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions"

const _nullErrors = [];

const SessionErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSIONS_ERRORS:
            let errors = []
            action.errors.forEach( err => errors.push(Object.values(err)))
            return Object.values(errors);
        case RECEIVE_CURRENT_USER:
            return _nullErrors;
        default:
            return state;
    }
}

export default SessionErrorsReducer;