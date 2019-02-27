import React, { Component } from 'react';
import * as api from '../api';
import Comments from './comments';
import Votes from './votes';

export class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    isDeleted: false,
  };
  render() {
    const { user } = this.props;
    const { article, isLoading } = this.state;
    if (isLoading) return <h3>Loading article...</h3>;
    return (
      <div className="articleData">
        {article !== {} && (
          <div>
            <p>{article.article_id}</p>
            <p>{article.title}</p>
            <p>Topic: {article.topic}</p>
            <p>{article.body}</p>
            <p>Author: {article.author}</p>
            {user.username === article.author && (
              <button onClick={this.handleDelete}>Delete Article</button>
            )}
            <Votes
              article_id={article.article_id}
              votes={article.votes}
              user={user}
            />
          </div>
        )}

        <div className="comments">
          {article.article_id && (
            <Comments user={user} article_id={article.article_id} />
          )}
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.fetchArticleById();
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.fetchArticleById();
    }
  }
  fetchArticleById = () => {
    const { article_id } = this.props;

    api.getArticleById(article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  };

  handleDelete = () => {
    const { article_id } = this.props;
    api.deleteItem(article_id).then(res => {
      this.props.navigate('/', { state: { isDeleted: true } });
    });
  };
}

export default SingleArticle;
