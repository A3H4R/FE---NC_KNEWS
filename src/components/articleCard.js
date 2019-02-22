import React, { Component } from 'react';
import { Link } from '@reach/router';
import './CSS/articleCard.css';

export class ArticleCard extends Component {
  render() {
    const { articles } = this.props;
    return (
      <div className="ArticleCard">
        <div>
          {articles.map(article => (
            <div className="article" key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <div className="articleTitle"> {article.title}</div>
                <br />
                <p className="articleAuthor">
                  {' '}
                  Author: {article.author.toString()}
                </p>
                <br />
                <p className="articleCreated">
                  Created At: {article.created_at}
                </p>
              </Link>
            </div>
          ))}
          <br />
        </div>
      </div>
    );
  }
}

export default ArticleCard;
