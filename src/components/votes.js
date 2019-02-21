import React, { Component } from 'react';
import VoteUp from './voteUp';
import VoteDown from './voteDown';
import * as api from '../api';
export class Votes extends Component {
  state = {
    voteChange: 0,
  };
  render() {
    const { voteChange } = this.state;
    let { votes } = this.props;
    // console.log(voteChange);
    return (
      <div>
        <VoteUp voteModifier={this.voteModifier} />
        <p>{votes + voteChange}</p>
        <VoteDown voteModifier={this.voteModifier} />
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
    // if (this.state.voteChange === 1 || this.state.voteChange === -1) {
    //   this.setState({ voteChange: 2 });
    // } else {
    //   this.setState({ voteChange: num });
    // }
  };
}

export default Votes;
