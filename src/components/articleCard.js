import React, { Component } from 'react';
import { Link } from '@reach/router';
import './CSS/articleCard.css';
const bkg = require('../images/articles.jpeg');
const image = require('../images/football.jpg');

const fs = require('fs');
const fileExists = require('file-exists');

let pic = '';

export class ArticleCard extends Component {
  render() {
    const { articles } = this.props;

    return (
      <div className="articleCardsContainer">
        <div className="cards">
          {articles.map(article => (
            <div className="card" key={article.article_id}>
              {/* {
              fs.access(file, fs.constants.F_OK, (err) => {
                console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
              })
              ? // `../images/${article.topic}.jpg` 
              (pic = require(`../images/${article.topic}.jpg`))
            : (pic = require(`../images/NC.png`))}
              <img src={pic} /> */}
              {/* {fileExists(`../images/${article.topic}.jpg`, (err, exists) =>
                console.log(exists)
              ) // OUTPUTS: true or false
              } */}
              <img src={bkg} alt="" className="cardBackground" />
              <img src={image} alt="" className="cardTopicImage" />
              <Link to={`/articles/${article.article_id}`}>
                <div className="articleTitle"> {article.title}</div>
              </Link>

              {/* <p className="articleTopic">Topic: {article.topic}</p> */}
              {/* <p className="articleAuthor"> Author: {article.author}</p> */}
              <p className="articleCreated">
                Created At: {article.created_at.substring(0, 10)}
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
