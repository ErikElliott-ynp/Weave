import React from 'react';
import MyFirstGrid from './test_grid';
import LoginFormContainer from './forms/login_form_container';
import SignupFormContainer from './forms/signup_form_container';
import Particles from 'react-particles-js';

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
              <MyFirstGrid />
            </div>


              {/* <Particles
                params={{
                  "particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#000000"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":100,"color":"#000000","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":200,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true
                }}
              /> */}


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