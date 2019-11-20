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

import MyFirstGrid from '../test_grid';


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

const useStyles = makeStyles(theme => ({
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
      signupForm: false
    }

    this.formSwitch = this.formSwitch.bind(this);
  }

  formSwitch() {
    this.setState({ signupForm: !this.state.signupForm })
  }

  formSwitchButtonText() {
    if (!this.state.signupForm) {
      return 'Sign up Instead.'
    } else {
      return 'Login?'
    }
  }

  formTypeText() {
    if (!this.state.signupForm) {
      return 'Login'
    } else {
      return 'Sign up'
    }
  }


  render() {
    const { classes } = this.props;

    return (
<div>
        <CssBaseline />

          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {this.formTypeText()}
            </Typography>
            <form className={classes.form} noValidate>
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
              />

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
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button

                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {this.formTypeText()}
              </Button>




                  <Link onClick={this.formSwitch} href="#" variant="body2">
                    {this.formSwitchButtonText()}
                  </Link>


              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(SignInSide);