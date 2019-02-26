import React, { Component } from 'react';
import * as api from '../api';
import Votes from './votes';
// import './CSS/comments.css';

class Comments extends Component {
  state = {
    comments: [],
    newComment: '',
  };

  render() {
    const { comments } = this.state;
    const { article_id, user } = this.props;

    return (
      <div className="commentCards">
        {comments.map(comment => {
          return (
            <div className="commentText" key={comment.comment_id}>
              <p>
                -----------------------------------------------------------------------------------------------------
              </p>
              <p>Comment Id:{comment.comment_id}</p>
              <p>{comment.body}</p>
              <p>Author: {comment.author}</p>
              {user.username === comment.author && (
                <button
                  id={comment.comment_id}
                  onClick={this.handleDeleteComment}
                >
                  Delete Comment
                </button>
              )}

              <Votes
                article_id={article_id}
                comment_id={comment.comment_id}
                votes={comment.votes}
                user={user}
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
  componentDidUpdate(prevProps, prevState) {
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
    api.postNewComment(article_id, data).then(comment => {
      this.setState(state => {
        return { comments: [comment, ...state.comments] };
      });
    });
  };
  handleDeleteComment = event => {
    const { article_id } = this.props;
    const comment_id = event.target.id;

    api.deleteComment(article_id, comment_id).then(res => {
      this.setState(state => {
        const commentsWithoutDeletedComment = state.comments.filter(comment => {
          if (comment.comment_id !== +comment_id) return comment;
        });
        return {
          comments: [...commentsWithoutDeletedComment],
        };
      });
    });
  };
}

export default Comments;
