import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './session_form2';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const mapStateToProps = (state) => {
    return {
        signedIn: !!state.session.user,
        errors: state.errors.session,
        formName: 'Login'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        process: user => dispatch(login(user)),
        demo: user => dispatch(login(user))
    }
}

export default withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm));