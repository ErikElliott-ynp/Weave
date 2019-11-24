import { connect } from "react-redux";
import PermDrawer from "./perm_drawer";
import { logout } from '../../actions/session_actions';

const mSTP = null;

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
};

export default connect(mSTP, mDTP)(PermDrawer);