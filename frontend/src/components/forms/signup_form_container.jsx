import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './session_form';

const mapStateToProps = (state) => {

    return {
        signedIn: !!state.session.user,
        errors: state.errors.session,
        formName: 'Sign Up'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        process: user => dispatch(signup(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);