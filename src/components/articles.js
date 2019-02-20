import React, { Component } from 'react';
import * as api from '../api';
import { Link } from '@reach/router';

export class Articles extends Component {
  state = {
    articles: [],
  };
  render() {
    const { articles } = this.state;
    return (
      <div className="articles">
        Articles
        {articles.map(article => (
          <p key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
          </p>
        ))}
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.fetchArticles();
    }
  }
  fetchArticles = () => {
    const { topic } = this.props;
    api.getArticles(topic).then(articles => {
      this.setState({ articles });
    });
  };
}

export default Articles;
