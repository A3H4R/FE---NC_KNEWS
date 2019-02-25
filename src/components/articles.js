import React, { Component } from 'react';
import * as api from '../api';
import './CSS/articles.css';
// import throttle from 'lodash.throttle';
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
    const { articles, total_count, isLoading, limit } = this.state;
    const totalArticles = total_count.map(total => {
      return total.total_count;
    });
    // console.log(totalArticles[0]);
    if (isLoading) return <h3>Loading article...</h3>;

    return (
      <div className="articlesList">
        Articles
        <div>
          <ArticleCard className="articleCard" articles={articles} />
          <p>Total Articles: {totalArticles} </p>

          {articles.length < totalArticles[0] &&
            (console.log(articles.length) || console.log(totalArticles[0]) || (
              <button onClick={this.loadMore} className="loadMore">
                Load More Articles
              </button>
            ))}
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log('CDM');
    this.fetchArticles();
    // this.addScrollEventListner();
  }

  // addScrollEventListner = () => {
  //   document
  //     .querySelector('.articlesList')
  //     .addEventListener('scroll', this.handleScroll);
  // };

  // handleScroll = throttle(event => {
  //   const { clientHeight, scrollTop, scrollHeight } = event.target;

  //   const distanceFromBottom = scrollHeight - (clientHeight + scrollTop);
  //   if (distanceFromBottom < 150) console.log('TIME TO GET MORE ARTICLES');

  //   // console.log('Scrolling.....');
  //   // console.log(event);
  // }, 2000);

  componentDidUpdate(prevProps, prevState) {
    console.log('CDU');
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
    console.log('fetching articles');
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
    console.log('loading more...');
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
}

export default Articles;
