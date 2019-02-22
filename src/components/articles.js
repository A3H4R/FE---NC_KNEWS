import React, { Component } from 'react';
import * as api from '../api';
import './CSS/articles.css';
import throttle from 'lodash.throttle';
import ArticleCard from './articleCard';

export class Articles extends Component {
  state = {
    articles: [],
  };
  render() {
    const { articles } = this.state;
    return (
      <div className="articlesList">
        Articles
        <div>
          <ArticleCard className="articleCard" articles={articles} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles();
    this.addScrollEventListner();
  }

  addScrollEventListner = () => {
    document
      .querySelector('.articlesList')
      .addEventListener('scroll', this.handleScroll);

    window.addEventListener('scroll', this.handleScroll);
  };

  handleScroll = throttle(event => {
    console.log('Scrolling.....');
    console.log(event);
  }, 2000);

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
