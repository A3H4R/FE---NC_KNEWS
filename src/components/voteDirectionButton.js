import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CSS/voteDirection.css';

export class VoteDirectionButton extends Component {
  render() {
    const { direction, disabled } = this.props;
    return (
      // <div>
      //   <button disabled={disabled} onClick={this.handleClick}>
      //     Vote{' '}
      //     {`${direction}` === 'Up' ? (
      //       <FontAwesomeIcon icon="thumbs-up" />
      //     ) : (
      //       <FontAwesomeIcon icon="thumbs-down" />
      //     )}
      //   </button>
      // </div>

      <div>
        <div disabled={disabled} onClick={this.handleClick}>
          {`${direction}` === 'Up' ? (
            <div className="likeButton">
              <FontAwesomeIcon icon="thumbs-up" /> Like
            </div>
          ) : (
            <div className="dislikeButton">
              <FontAwesomeIcon icon="thumbs-down" /> Dislike{' '}
            </div>
          )}
        </div>
      </div>
    );
  }
  handleClick = event => {
    let { voteModifier, direction } = this.props;

    direction === 'Up' ? voteModifier(1) : voteModifier(-1);
  };
}

export default VoteDirectionButton;
