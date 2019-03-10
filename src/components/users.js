import React, { Component } from 'react';
import * as api from '../api';
import './CSS/users.css';

export class Users extends Component {
  state = { users: [] };

  render() {
    const { users } = this.state;

    return (
      <div className="usersContainer">
        <div className="usersCards">
          {users.map(user => {
            return (
              <div key={user.username} className="userCard">
                <div className="userAvatarURL">
                  <img src={user.avatar_url} alt="" height="150" width="150" />
                  <img
                    src={
                      'https://media1.tenor.com/images/f06657ea7a56f1b397a340a2c789a19f/tenor.gif?itemid=11395844'
                    }
                    alt=""
                    height="150"
                    width="150"
                  />
                </div>
                <p className="username">{user.username}</p>
                <p className="name">{user.name}</p>
                <p className="rank"> Rank || Silver</p>
                <p className="articleCount">15 articles written</p>
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
