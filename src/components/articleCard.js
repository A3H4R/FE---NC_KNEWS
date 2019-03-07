import React, { Component } from 'react';
import { Link } from '@reach/router';
import './CSS/articleCard.css';

export class ArticleCard extends Component {
  render() {
    const { articles } = this.props;
    return (
      <div className="articleCard">
        <div className="articleCardsContainer">
          {articles.map(article => (
            <div className="article" key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <div className="articleTitle"> {article.title}</div>
              </Link>
              <br />
              <p className="articleTopic">Topic: {article.topic}</p>
              <br />
              <p className="articleAuthor"> Author: {article.author}</p>
              <br />
              <p className="articleCreated">
                Created At: {article.created_at.substring(0, 10)}
              </p>
              <br />
              <p className="articleVotes"> Rating: {article.votes}</p>
            </div>
          ))}
          <br />
        </div>
      </div>
    );
  }
}

export default ArticleCard;
