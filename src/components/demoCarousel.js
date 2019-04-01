import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { navigate } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinesEllipsis from 'react-lines-ellipsis';
import * as api from '../api';
import './CSS/demoCarousel.css';

class DemoCarousel extends Component {
  state = {
    index: 0,
    direction: null,
    articles: [],
    page: 1,
    limit: 10,
    sort_by: 'votes',
    sort_order: 'DESC',
    isLoading: true,
  };
  render() {
    const { articles, isLoading } = this.state;

    return (
      <div>
        {isLoading && <h2 id="loading">Loading...</h2>}
        <Carousel className="carouselContainer">
          {articles.map((article, index) => {
            return (
              <div key={article.article_id} className="carouselContent">
                <img
                  className="carouselImage"
                  src={require(`../images/TopicImages/topic${
                    article.topic
                  }.jpg`)}
                  alt=""
                />
                <div className="carouselArticleContent">
                  <h3 className="articleSlideTopic"> {article.topic}</h3>
                  <h2 className="articleSlideTitle">{article.title}</h2>
                  <LinesEllipsis
                    className="articleSlideBody"
                    text={article.body}
                    maxLine="5"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                  />
                  <p className="ratingCarousel">
                    <FontAwesomeIcon icon="star" className="ratingIcon" />{' '}
                    {article.votes}
                  </p>
                  <button
                    className="articleSlideReadMoreButton"
                    onClick={event => {
                      this.readMore(event, article.article_id);
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            );
          })}
        </Carousel>
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
        return this.setState({ articles: articles, isLoading: false });
      });
  };
  readMore = (event, article_id) => {
    navigate(`/articles/${article_id}`);
  };
}

export default DemoCarousel;
