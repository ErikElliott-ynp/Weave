import React from 'react';
import LoginFormContainer from './forms/login_form_container';
import SignupFormContainer from './forms/signup_form_container';
import Particles from 'react-particles-js';
import MainGrid from './main_grid';

class Splash extends React.Component {
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
            </div>

            <div className="flexMeDaddy">
              <MainGrid />
            </div>


        </div>
        );
    }
}

export default Splash;