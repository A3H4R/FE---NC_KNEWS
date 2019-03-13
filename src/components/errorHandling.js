import React from 'react';
import './CSS/errorHandling.css';
const errorImage = require('../images/oops.png');

export default function ErrorHandling(props) {
  const error_message = props.location.state.error_message;
  return (
    <div className="errorContainer">
      <h1 className="symbol">!</h1>
      <h2 className="oops">Oops Something Went Wrong</h2>
      <img className="errorImage" src={errorImage} alt="" />
      <h3 className="errorMessage">{error_message}</h3>
    </div>
  );
}
