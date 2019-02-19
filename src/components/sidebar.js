import React from 'react';

const Sidebar = ({ user, logout }) => {
  if (user.username) {
    return (
      <div className="sidebar">
        <p>Welcome To NC-KNEWS {user.username}</p>
        <button onClick={logout}>Log Out</button>
        <img src={user.avatar_url} alt="" />
      </div>
    );
  } else {
    return (
      <section className="sidebar">
        <h3>Please Login To View Articles</h3>
      </section>
    );
  }
};

export default Sidebar;
