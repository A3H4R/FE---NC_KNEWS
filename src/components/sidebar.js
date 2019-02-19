import React from 'react';

const Sidebar = ({ user, logout }) => {
  if (user.username)
    return (
      <div classname="sidebar">
        <p>Welcome To NC-KNEWS {user.username}</p>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  return <section classname="sidebar"> Please Login To View Articles</section>;
};

export default Sidebar;
