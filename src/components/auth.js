import React, { Component } from 'react';

export class Auth extends Component {
  state = {
    username: '',
  };
  render() {
    const { user } = this.props;
    if (user) return <div>{this.props.children}</div>;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Username:</label>
          <input onChange={this.handleChange} />
          <button>Login</button>
        </form>
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
    login(this.state.username);
  };
}
export default Auth;
