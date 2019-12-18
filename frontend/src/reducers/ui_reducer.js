import { combineReducers } from "redux";
import LoadingReducer from "./loading_reducer";

const UIReducer = combineReducers({
    loading: LoadingReducer

})

export default UIReducer;