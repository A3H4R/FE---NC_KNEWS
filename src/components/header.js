import React from 'react';
import './CSS/header.css';

export default function header() {
  return (
    <div className="header">
      <img
        className="logo"
        height="100px"
        src="https://northcoders.com/images/logos/learn_to_code_manchester_rw_second.png"
        alt="logo"
      />
      <h1 className="h1_knews">KNEWS</h1>
    </div>
  );
}
