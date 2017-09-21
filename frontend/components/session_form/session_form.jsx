import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleChange(field) {
    return (event) => this.setState({
      [field]: event.currentTarget.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  altLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="/login">Log In</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.sessionErrors.map((error, idx) => (
          <li key={`sessionError-${idx}`}>
            {error}
          </li>
        ))}
        {this.props.signupErrors.map((error, idx) => (
          <li key={`signupError-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  signUpField() {
    if (this.props.formType === 'signup') {
      return (
        <label>Name:
          <input type="text"
            value={this.state.name}
            onChange={this.handleChange('name')}
            className="session-input"
          />
        </label>
      );
    }
  }

  render() {
    let formType = this.props.formType;
    formType === 'login' ? (formType = 'Log In') : (formType = 'Sign Up');
    return(
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form-box">
          Welcome to KrdBrd!
          <br/>
          Please {formType} or {this.altLink()}
          {this.renderErrors()}
          <div className="session-form">
            <br/>
            {this.signUpField()}
            <br/>
              <label>Email:
                <input type="text"
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  className="session-input"
                />
              </label>
            <br/>
              <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  className="session-input"
                />
              </label>
              <br/>
              <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
