import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const demoUser = {
  email: 'y.kusama@art.jp',
  password: 'password'
};

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoClick = this.demoClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/boards');
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

  demoClick() {
    this.props.logIn(demoUser);
  }

  altLink() {
    if (this.props.formType === 'signup') {
      return <Link to="/" onClick={this.props.clearErrors}>
              Log In
             </Link>;
    } else {
      return <Link to="/signup" onClick={this.props.clearErrors}>
              Sign Up
             </Link>;
    }
  }

  renderErrors() {
    return(
      <ul className="session-errors">
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
        <div>
          <label>Name:</label>
          <br/>
          <input type="text"
            value={this.state.name}
            onChange={this.handleChange('name')}
            className="session-input"
          />
          <br/>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    let formType = this.props.formType;
    formType === 'signup' ? (formType = 'Sign Up') : (formType = 'Log In');
    return(
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <h1>Welcome to KrdBrd!</h1>
          <br/>
          <p>Please {formType} or {this.altLink()}</p>
          {this.renderErrors()}
          <div className="session-form">
            {this.signUpField()}
                <label>Email:</label>
                <input type="text"
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  className="session-input"
                />
            <br/>
                <label>Password:</label>
                <input type="password"
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  className="session-input"
                />
              <br/>
              <input type="submit" onClick={this.handleSubmit} hidden />
              <button type="button" onClick={this.handleSubmit}>{formType}</button>
              <button type="button" onClick={this.demoClick}>Demo</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
