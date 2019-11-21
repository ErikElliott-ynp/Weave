import { combineReducers } from "redux";
import imgurReducer from "./imgur_reducer";

const EntitiesReducer = combineReducers({
    imgur: imgurReducer
})

export default EntitiesReducer;