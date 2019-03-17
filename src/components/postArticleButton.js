import React from 'react';
import { Link } from '@reach/router';
import './CSS/postArticleButton.css';

export default function PostArticleButton() {
  return (
    <Link to="/addNewArticle" className="postArticleButtonContainer">
      <div>
        <div>
          <img
            src={require('../images/postArticleImage.jpg')}
            className="postArticleImage"
            alt="bannerImage"
          />
        </div>
        <h1 className="postArticleText">Would you like to post an article?</h1>
      </div>
    </Link>
  );
}
