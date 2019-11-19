import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './session_form';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formName: 'Login'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        process: user => dispatch(login(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);