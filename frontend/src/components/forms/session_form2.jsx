import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { withRouter, Redirect } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Weave
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

class SignInSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password2: ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.signedIn === true) {
  //     this.props.history.push('/dashboard');
  //   }

  //   // Set or clear errors
  //   this.setState({ errors: nextProps.errors })
  // }

  redirect() {
    if (this.props.signedIn === true ) {
      return <Redirect to="/dashboard" />
    }
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.process(user);
  }

  handleDemo() {

    let user = {
      email: "b@gmail.com",
      password: "mountain"
    }

    this.props.process(user);
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  signUpPassword2() {
    if (this.props.formName === 'Sign Up') {
      return (
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Confirm Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={this.state.password2}
          onChange={this.update('password2')}
        />
      )
    } else {
      return null;
    }
  }

  render() {

    const { classes } = this.props;

    return (
      <div className="form">
        {this.redirect()}
              <Paper>

        <CssBaseline />

          <div className={classes.paper}>
            <Avatar className={classes.avatar} id="avatar">
              WEAVE
            </Avatar>
            <Typography component="h1" variant="h5">
              {this.props.formName}
            </Typography>

            <form 
            onSubmit={this.handleSubmit}
            className={classes.form} 
            noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={this.state.email}
                onChange={this.update('email')}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={this.state.password}
                onChange={this.update('password')}
              />

              {this.signUpPassword2()}
              {/* <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={this.state.password2}
              /> */}

              {this.renderErrors()}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                id="login-button"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {this.props.formName}
              </Button>

            </form>
            <Button
              id="demo-button"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => this.handleDemo()}
            >
              Demo
              </Button>

              <Box mt={5}>
                <Copyright />
              </Box>
          </div>
              </Paper>
      </div>
    );
  }
}

export default withRouter(SignInSide);