import React from 'react';
import LoginFormContainer from './forms/login_form_container';
import SignupFormContainer from './forms/signup_form_container';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signupForm: false
        }

        this.formSwitch = this.formSwitch.bind(this);
    }

    formSwitch() {
        this.setState( {signupForm: !this.state.signupForm } )
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
            return 'Login'
        } else {
            return 'Sign up Instead'
        }
    }

    render() {

        return (
            <div 
            className='splash'>
                <div className='splash-left'>
                    <div className='demo-container'>
                        DEMO HERE
                    </div>
                </div>

                <div className='splash-right'>
                    <header className='splash-title'>
                        Weave
                    </header>

                    <div className='form-container'>

                        {this.form()}

                        <button
                        className='form-switch'
                        onClick={this.formSwitch}
                        >
                            {this.formSwitchButtonText()}
                        </button>
                    </div>

                    <div className='splash-group-info'>
                        Our Pictures
                    </div>
                </div>
            </div>
        );
    }
}

export default Splash;