import React, { Component } from 'react';
import('./CSS/auth.css');

export class Auth extends Component {
  state = {
    username: '',
  };
  render() {
    const { user } = this.props;
    if (user) return this.props.children;
    return (
      <div id="authContainer">
        <form className="loginForm" onSubmit={this.handleSubmit}>
          {/* <label>Enter Username:</label> */}
          <input
            onChange={this.handleChange}
            required
            placeholder="Enter Username"
          />
          <button>Login</button>
        </form>
        <h3 className="loginMsg">Please use 'jessjelly' to login</h3>
      </div>
    );
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ username: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { login } = this.props;
    const { username } = this.state;
    login(username);
    this.setState({ username: '' });
  };
}
export default Auth;
