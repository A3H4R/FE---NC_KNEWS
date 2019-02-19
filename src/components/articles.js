import React, { Component } from 'react';
import * as api from '../api';

export class Articles extends Component {
  state = {
    articles: [],
  };
  render() {
    const { articles } = this.state;
    console.log({ articles });
    return (
      <div className="articles">
        Articles
        {articles.map(article => (
          <p>{article.title}</p>
        ))}
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }
  fetchArticles = () => {
    api.getArticles().then(articles => {
      this.setState({ articles });
    });
  };
}

export default Articles;
