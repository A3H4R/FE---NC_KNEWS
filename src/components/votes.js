import React, { Component } from 'react';
import VoteDirectionButton from './voteDirectionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as api from '../api';
import './CSS/votes.css';
export class Votes extends Component {
  state = {
    voteChange: 0,
  };
  render() {
    const { voteChange } = this.state;
    let { votes } = this.props;
    return (
      <div className="voting_buttons">
        <VoteDirectionButton
          className="likeButton"
          voteModifier={this.voteModifier}
          direction="Up"
          disabled={voteChange === 1}
        />
        <p className="commentVotes">
          <FontAwesomeIcon icon="star" className="ratingIcon" />{' '}
          {votes + voteChange}
        </p>
        <VoteDirectionButton
          className="dislikeButton"
          voteModifier={this.voteModifier}
          direction="Down"
          disabled={voteChange === -1}
        />
      </div>
    );
  }

  voteModifier = num => {
    const { voteChange } = this.state;
    const { article_id, comment_id } = this.props;

    voteChange === 1 || voteChange === -1
      ? this.setState({ voteChange: 0 })
      : this.setState({ voteChange: num });

    api.updateVote(article_id, comment_id, num);
  };
}

export default Votes;
