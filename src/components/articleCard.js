import React, { Component } from 'react';
import { Link } from '@reach/router';
import './CSS/articleCard.css';
const bkg = require('../images/articles.jpeg');
const image = require('../images/football.jpg');

export class ArticleCard extends Component {
  render() {
    const { articles } = this.props;

    return (
      <div className="articleCardsContainer">
        <div className="cards">
          {articles.map(article => (
            <div className="card" key={article.article_id}>
              <img src={bkg} alt="" className="cardBackground" />
              <img src={image} alt="" className="cardTopicImage" />

              <Link to={`/articles/${article.article_id}`}>
                <div className="articleTitle">
                  <h1>{article.title}</h1>
                </div>
              </Link>

              {/* <p className="articleTopic">Topic: {article.topic}</p> */}
              {/* <p className="articleAuthor"> Author: {article.author}</p> */}
              <p className="articleCreated">
                {article.created_at.substring(0, 10)}
              </p>
              <p className="articleCommentCount">
                Comments: {article.comment_count}
              </p>

              <p className="articleVotes"> Rating: {article.votes}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ArticleCard;
