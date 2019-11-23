import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mSTP = state => {
    return {
        signedIn: !!state.session.user
    }
};

export default connect(mSTP)(Dashboard);