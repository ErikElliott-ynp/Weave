import React from 'react';
import MyFirstGrid from './test_grid';
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
            <div>
                {this.form()}
                {/* <div className='banner'>
                    <MyFirstGrid />
                </div> */}


                {/* 
                <div className='splash-left'>
                    <div className='header'>
                        <header className='splash-title'>
                            Weave
                        </header>
                        <div className='logo'>
                        </div>
                    </div>

                    <div className='slogan'>
                        <div className='slogan1'>AN ALL-IN-ONE</div>
                        <div className='slogan2'>SOCIAL MEDIA PLATFORM.</div>
                    </div>

                    
                </div>

                <div className='splash-right'>
                    <div className='splash-group-info'>
                        Meet The Team
                    </div>
                    <div className='form-container'>

                        <button
                        className='form-switch'
                        onClick={this.formSwitch}
                        >
                            {this.formSwitchButtonText()}
                        </button>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Splash;