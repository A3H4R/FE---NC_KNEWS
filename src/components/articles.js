import React, { Component } from 'react';
import * as api from '../api';
import './CSS/articles.css';
import ArticleCard from './articleCard';
import { navigate, Link } from '@reach/router';
import SortArticles from './sortArticles';
import PostArticleButton from './postArticleButton';

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
    const { topic, user } = this.props;
    if (isLoading)
      return <h3 className="loadingArticles">Loading articles...</h3>;
    return (
      <div id="articlesPage">
        <div className="articleList">
          <div className="articleInteraction">
            <div className="sortArticlesFilters">
              <SortArticles
                updateSortedArticles={this.updateSortedArticles}
                topic={topic}
              />
            </div>
            <PostArticleButton user={user} />
          </div>

          <p className="totalArticlesTop">
            Showing {articles.length} of {total_count} Articles
          </p>
          <div className="totalcountLoadmore">
            <ArticleCard articles={articles} />
            <p className="totalArticles">
              Showing {articles.length} of {total_count} Articles
            </p>

            {articles.length < total_count && (
              <button
                onClick={this.loadMore}
                id="loadMore"
                className="redButton"
              >
                Load More Articles
              </button>
            )}
            <Link to="/addNewArticle">
              <h3> Want To Write An Article?</h3>
            </Link>
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
