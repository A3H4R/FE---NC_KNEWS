import React, { Component } from 'react';

class VoteUp extends Component {
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Vote UP</button>
      </div>
    );
  }
  handleClick = event => {
    this.props.voteModifier(1);
  };
}

export default VoteUp;
