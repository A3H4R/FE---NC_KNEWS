import React, { Component } from 'react';
import * as api from '../api';
import './CSS/articles.css';
import ArticleCard from './articleCard';
import { navigate } from '@reach/router';
import SortArticles from './sortArticles';

export class Articles extends Component {
  state = {
    articles: [],
    limit: 10,
    page: 1,
    total_count: '',
    isLoading: true,
    sort_by: 'created_at',
    sort_order: 'DESC',
  };
  render() {
    const { articles, total_count, isLoading } = this.state;
    const { topic } = this.props;
    if (isLoading) return <h3>Loading article...</h3>;
    return (
      <div>
        {' '}
        <div className="articleList">
          <div className="sortArticlesFilters">
            <SortArticles
              updateSortedArticles={this.updateSortedArticles}
              topic={topic}
            />
          </div>
          <div>
            <ArticleCard articles={articles} />
            <p className="totalArticles">Total Articles: {total_count} </p>
            {articles.length < total_count && (
              <button onClick={this.loadMore} className="loadMore">
                Load More Articles
              </button>
            )}
          </div>
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

    if (topicChange) {
      this.setState(
        {
          articles: [],
          limit: 10,
          page: 1,
          total_count: '',
          isLoading: true,
          sort_by: 'created_at',
          sort_order: 'DESC',
        },
        () => this.fetchArticles()
      );
    }

    if (nextPage) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { topic } = this.props;
    const { page, limit, sort_by, sort_order } = this.state;

    api
      .getArticles(topic, page, limit, sort_by, sort_order)
      .then(({ articles, total_count }) => {
        return this.setState(prevState => {
          return {
            articles:
              page === 1 ? articles : [...prevState.articles, ...articles],
            total_count,
            isLoading: false,
          };
        });
      })
      .catch(error => {
        navigate('/error', {
          replace: true,
          state: {
            error_message: error.response.data.message,
            from: '/',
          },
        });
      });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  updateSortedArticles = (
    articles,
    total_count,
    page,
    limit,
    sort_by,
    sort_order
  ) => {
    return this.setState(prevState => {
      return {
        articles: page === 1 ? articles : [...prevState.articles, ...articles],
        page,
        limit,
        sort_by,
        sort_order,
        total_count,
        isLoading: false,
      };
    });
  };
}

export default Articles;
