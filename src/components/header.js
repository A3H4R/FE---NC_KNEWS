import React from 'react';

import './CSS/header.css';
import Nav from './nav';
const logo = require('../images/NC.png');

export default function header(props) {
  const { logout } = props;
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      {/* <h1 className="h1_text">NORTHCODERS KNEWS</h1> */}
      <Nav logout={logout} />
    </div>
  );
}
