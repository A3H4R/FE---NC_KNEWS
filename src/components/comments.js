import React, { Component } from 'react';
import * as api from '../api';
import Votes from './votes';

class Comments extends Component {
  state = {
    comments: [],
  };

  render() {
    const { comments } = this.state;
    console.log(comments);
    return (
      <div className="nav links">
        [COMMENTS] <span>Comments for this Article </span>
        {comments.map(comment => {
          return (
            <div key={comment.comment_id}>
              <p>
                -----------------------------------------------------------------------------------------------------
              </p>
              <p>Comment Id:{comment.comment_id}</p>
              <p>{comment.body}</p>
              <p>Author: {comment.author}</p>
              <Votes votes={comment.votes} />
            </div>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    this.fetchCommentsByArticleId();
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.fetchCommentsByArticleId();
    }
  }
  fetchCommentsByArticleId = () => {
    const { article_id } = this.props;

    api.getCommentsByArticleId(article_id).then(comments => {
      this.setState({ comments });
    });
  };
}

export default Comments;
