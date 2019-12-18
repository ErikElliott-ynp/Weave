import { connect } from "react-redux";
import PermDrawer from "./perm_drawer";
import { logout } from '../../actions/session_actions';

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
};

export default connect(null, mDTP)(PermDrawer);