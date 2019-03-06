import React from 'react';
import './CSS/header.css';
const logo = require('../images/NC.png');

export default function header() {
  return (
    <div className="header">
      <img className="logo" height="100px" src={logo} alt="logo" />
      <h1 className="h1_text">NORTHCODERS KNEWS</h1>
    </div>
  );
}
