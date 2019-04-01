import React from 'react';
import { Link } from '@reach/router';
import './CSS/postArticleButton.css';

export default function PostArticleButton() {
  return (
    <div>
      <Link to="/addNewArticle" className="postArticleButtonContainer">
        <img
          src={require('../images/postArticleImage.jpg')}
          className="postArticleImage"
          alt="bannerImage"
        />
        {/* <h1 className="postArticleText">Would you like to post an article?</h1> */}
      </Link>
    </div>
  );
}
