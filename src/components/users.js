import React, { Component } from 'react';
import * as api from '../api';

export class Users extends Component {
  state = { users: [] };

  render() {
    const { users } = this.state;

    return (
      <div className="users">
        <div className="usersMap">
          {users.map(user => {
            return (
              <div key={user.username} className="userData">
                <p className="username">{user.username}</p>
                <p className="name">{user.name}</p>
                <img className="userAvatarURL" src={user.avatar_url} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchUsers();
  };

  fetchUsers = () => {
    api.getUsers().then(users => this.setState({ users }));
  };
}

export default Users;
