import React, { Component } from 'react';

export class Auth extends Component {
  state = {
    username: '',
  };
  render() {
    const { user } = this.props;
    if (user) return this.props.children;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Username:</label>
          <input onChange={this.handleChange} />
          <button>Login</button>
        </form>
        <br />
        Information for Hiring Partners: Please use 'jessjelly' to login
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
