import { combinerReducers } from 'redux';
import sessionReducer form "./session_reducer";

const RootReducer = combineReducers({
    session: sessionReducer
})

export default RootReducer;