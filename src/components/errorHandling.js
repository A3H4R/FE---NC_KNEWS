import React from 'react';

export default function ErrorHandling(props) {
  const error_message = props.location.state.error_message;
  return (
    <div>
      <h1>!</h1>
      <h2>Oops Something Went Wrong</h2>
      <h3>{error_message}</h3>
    </div>
  );
}
