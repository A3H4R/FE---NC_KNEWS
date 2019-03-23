import React from 'react';

import './CSS/header.css';
import Nav from './nav';
const logo = require('../images/NCKNEWS.png');

export default function header(props) {
  const { logout } = props;
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      <Nav logout={logout} />
    </div>
  );
}
