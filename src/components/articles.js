import React, { Component } from 'react';
import * as api from '../api';
import './CSS/articles.css';
import ArticleCard from './articleCard';

export class Articles extends Component {
  state = {
    articles: [],
    limit: 10,
    page: 1,
    total_count: [],
    isLoading: true,
  };
  render() {
    const { articles, total_count, isLoading } = this.state;
    console.log(total_count);

    if (isLoading) return <h3>Loading article...</h3>;

    return (
      <div className="articlesList">
        Articles
        <div>
          <ArticleCard className="articleCard" articles={articles} />
          <p>Total Articles: {total_count} </p>

          {articles.length < total_count && (
            <button onClick={this.loadMore} className="loadMore">
              Load More Articles
            </button>
          )}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const nextPage = prevState.page !== this.state.page;
    const topicChange = prevProps.topic !== this.props.topic;
    if (topicChange)
      this.setState(() => ({
        articles: [],
        limit: 10,
        page: 1,
        total_count: [],
      }));
    if (nextPage || topicChange) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { topic } = this.props;
    const { page, limit } = this.state;

    api.getArticles(topic, page, limit).then(({ articles, total_count }) => {
      return this.setState(prevState => {
        return {
          articles:
            page === 1 ? articles : [...prevState.articles, ...articles],
          total_count,
          isLoading: false,
        };
      });
    });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
}

export default Articles;
