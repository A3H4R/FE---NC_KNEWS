import React, { Component } from 'react';
import * as api from '../api';
import Votes from './votes';

class Comments extends Component {
  state = {
    comments: [],
    newComment: '',
  };

  render() {
    const { comments } = this.state;
    const { article_id } = this.props;
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
              <Votes
                article_id={article_id}
                comment_id={comment.comment_id}
                votes={comment.votes}
              />
            </div>
          );
        })}
        <div>
          <p>Add A New Comment</p>
          <form onSubmit={this.handlePostNewComment}>
            <label>New Comment:</label>
            <input onChange={this.handleNewComment} id="newComment" />
            <button>Post New Comment</button>
          </form>
        </div>
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

  handleNewComment = event => {
    const { value } = event.target;
    const field = event.target.id;

    this.setState({
      [field]: value,
    });
  };
  handlePostNewComment = event => {
    event.preventDefault();
    const { newComment } = this.state;
    const { username } = this.props.user;
    const { article_id } = this.props;
    const data = {
      body: newComment,
      username: username,
    };
    api.postNewComment(article_id, data);
  };
}

export default Comments;
