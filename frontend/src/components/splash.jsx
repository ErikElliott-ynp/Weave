import React from 'react';
import Link from '@material-ui/core/Link';
import LoginFormContainer from './forms/login_form_container';
import SignupFormContainer from './forms/signup_form_container';
import Particles from 'react-particles-js';
import SplashGrid from './splash_grid';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signupForm: false
        }

        this.formSwitch = this.formSwitch.bind(this);
    }

    formSwitch() {
        this.setState({ signupForm: !this.state.signupForm });
        this.props.clearErrors();
        if (document.querySelector("#sign-up")) {
            document.querySelector("#sign-up").id = "login";
        } else {
            document.querySelector("#login").id = "sign-up";
        }
    }

    form() {
        if (!this.state.signupForm) {
            return <LoginFormContainer />
        } else {
            return <SignupFormContainer />
        }
    }

    formSwitchButtonText() {
        if (!this.state.signupForm) {
            return 'Sign up Instead'
        } else {
            return 'Login'
        }
    }

    render() {

        return (
        <div className="bigDaddyFlex">

            <div className="lilHomieForm">
                {this.form()}
                <Link id="sign-up" onClick={this.formSwitch} href="#" variant="body2">
                    {this.formSwitchButtonText()}
                </Link>
            </div>

            <div className="flexMeDaddy">
              <SplashGrid />
            </div>


        </div>
        );
    }
}

export default Splash;