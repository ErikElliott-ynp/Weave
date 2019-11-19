import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      password2: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/dashboard');
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors })
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
        <div>
          <input
            className='password2'
            type='password'
            value={this.state.password2}
            onChange={this.update('password2')}
            placeholder='Password Confirmation'
          />
          <br/>
        </div>
      )
    } else {
      return null;
    }
  }

  render() {

    return (
      <div className='form'>
        <h1>{this.props.formName}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='input-container'>
            <input type='text'
              value={this.state.email}
              onChange={this.update('email')}
              placeholder='Email'
            />
            <br />
            <input type='password'
              value={this.state.password}
              onChange={this.update('password')}
              placeholder='Password'
            />
            <br />
            {this.signUpPassword2()}
            <input type='submit' value={this.props.formName} />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);