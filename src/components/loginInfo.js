import React from 'react';
import './CSS/loginInfo.css';

const LoginInfo = ({ user, logout }) => {
  if (user.username) {
    return (
      <div className="login_info">
        <p className="welcome_msg">Welcome To NC-KNEWS {user.username}</p>
        <button onClick={logout}>Log Out</button>
        <img className="user_avatar" src={user.avatar_url} alt="" />
      </div>
    );
  } else {
    return (
      <section className="notLoggedInMsg">
        <h3>Please Login To View Articles</h3>
      </section>
    );
  }
};

export default LoginInfo;
