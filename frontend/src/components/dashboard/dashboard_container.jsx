import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mSTP = state => {
    return {
        signedIn: !!state.session.user,
        loading: state.ui.loading
    }
};

export default connect(mSTP)(Dashboard);