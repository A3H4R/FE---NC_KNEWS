import React from 'react';
import './CSS/loginInfo.css';

const LoginInfo = ({ user, logout }) => {
  if (user.username) {
    return (
      <div className="loginInfo">
        <h1 className="welcome_msg">Welcome To NC-KNEWS</h1>
        <div className="userAvatarSection">
          <img className="userAvatar" src={user.avatar_url} alt="" />
          <h1 className="userName">
            {user.username.substring(0, 1).toUpperCase() +
              user.username.substring(1)}
          </h1>
        </div>

        <button className="logOutButton" onClick={logout}>
          Log Out
        </button>
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
