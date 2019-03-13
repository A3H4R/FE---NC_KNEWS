import React, { Component } from 'react';
import { navigate } from '@reach/router';

export default class PostArticleButton extends Component {
  render() {
    return (
      <div className="postNewArticle">
        <div>
          <h2>Would you like to post an article?</h2>
          <div className="postButton">
            <button onClick={this.handleClick}>Add a new Article</button>
          </div>
        </div>
      </div>
    );
  }

  handleClick = () => {
    navigate('/addNewArticle');
  };
}
