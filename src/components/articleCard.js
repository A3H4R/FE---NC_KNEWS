import React, { Component } from 'react';
import { Link } from '@reach/router';
import './CSS/articleCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'react-moment';

const bkg = require('../images/articles.jpeg');

export class ArticleCard extends Component {
  render() {
    const { articles } = this.props;

    return (
      <div className="articleCardsContainer">
        <div className="cards">
          {articles.map(article => (
            <div id="cardId" className="card" key={article.article_id}>
              <div className="card_design" />
              <img src={bkg} alt="" className="cardBackground" />
              <img
                src={require(`../images/${article.topic}.jpg`)}
                alt=""
                className="cardTopicImage"
              />

              <Link to={`/articles/${article.article_id}`}>
                <div className="articleTitle">
                  <h1 className="title">{article.title}</h1>
                </div>
              </Link>

              {/* <p className="articleTopic">Topic: {article.topic}</p> */}
              {/* <p className="articleAuthor"> Author: {article.author}</p> */}
              <div className="articleIcons">
                <p className="articleVotes">
                  <FontAwesomeIcon icon="star" className="ratingIcon" />{' '}
                  {article.votes}
                </p>
                <p className="articleCommentCount">
                  <FontAwesomeIcon icon="comments" className="commentsIcon" />{' '}
                  {article.comment_count}
                </p>

                <p className="articleCreated">
                  <FontAwesomeIcon icon="clock" className="clockIcon" />{' '}
                  <Moment format="YYYY-MM-DD HH:mm">
                    {article.created_at}
                  </Moment>
                  {/* {article.created_at.substring(0, 10)} */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ArticleCard;
