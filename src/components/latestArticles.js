import React, { Component } from 'react';
import * as api from '../api';
import { Link } from '@reach/router';
import './CSS/latestArticles.css';

export default class LatestArticles extends Component {
  state = {
    articles: [],
    page: 1,
    limit: 10,
    sort_by: 'created_at',
    sort_order: 'DESC',
  };
  render() {
    const { articles } = this.state;
    return (
      <div className="latestArticles">
        <h2 className="latestArticlesText">Latest Articles</h2>
        {articles.map(article => {
          return (
            <div className="latestArticle">
              <Link to={`/articles/${article.article_id}`}>
                <p className="latestArticleTitle">{article.title}</p>
                <p className="latestArticleDate">
                  {article.created_at.substring(0, 10)}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchArticles();
  };

  fetchArticles = () => {
    const { page, limit, sort_by, sort_order } = this.state;
    api
      .getArticles(null, page, limit, sort_by, sort_order)
      .then(({ articles }) => {
        return this.setState({ articles });
      });
  };
}
