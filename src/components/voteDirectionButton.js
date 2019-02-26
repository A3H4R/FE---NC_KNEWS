import React, { Component } from 'react';

export class VoteDirectionButton extends Component {
  render() {
    const { direction, disabled } = this.props;
    return (
      <div>
        <button disabled={disabled} onClick={this.handleClick}>
          Vote {`${direction}`}
        </button>
      </div>
    );
  }
  handleClick = event => {
    let { voteModifier, direction } = this.props;

    direction === 'Up' ? voteModifier(1) : voteModifier(-1);
  };
}

export default VoteDirectionButton;
