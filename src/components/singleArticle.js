import React, { Component } from 'react';
import * as api from '../api';
import Comments from './comments';
export class SingleArticle extends Component {
  state = {
    article: {},
  };
  render() {
    const { article } = this.state;
    return (
      <div className="articleData">
        [single article]
        <p>{article.article_id}</p>
        <p>{article.title}</p>
        <p>Topic: {article.topic}</p>
        <p>{article.body}</p>
        <p>Author: {article.author}</p>
        <div className="comments">
          {article.article_id && <Comments article_id={article.article_id} />}
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
      this.setState({ article });
    });
  };
}

export default SingleArticle;
