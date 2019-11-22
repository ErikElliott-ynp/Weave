import { connect } from "react-redux";
import { clearErrors } from "../actions/session_actions";
import Splash from "./splash";

const mSTP = null;

const mDTP = dispatch => {
    return ({
        clearErrors: () => dispatch(clearErrors())
    });
};

export default connect(mSTP, mDTP)(Splash);