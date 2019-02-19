import React, { Component } from 'react';
import * as api from '../api';

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
          <p>{article.title}</p>
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
    console.log(topic);
    api.getArticles(topic).then(articles => {
      this.setState({ articles });
    });
  };
}

export default Articles;
