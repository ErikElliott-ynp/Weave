import { combineReducers } from 'redux';
import SessionReducer from "./session_reducer";
import ErrorsReducer from "./errors_reducer";
import EntitiesReducer from "./entities_reducer";

const RootReducer = combineReducers({
    entities: EntitiesReducer,
    session: SessionReducer,
    errors: ErrorsReducer,
    entities: EntitiesReducer
})

export default RootReducer;