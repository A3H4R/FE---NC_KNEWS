import React, { Component } from 'react';

class VoteDown extends Component {
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Vote DOWN</button>
      </div>
    );
  }
  handleClick = event => {
    this.props.voteModifier(-1);
  };
}

export default VoteDown;
