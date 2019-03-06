import React, { Component } from 'react';
import { navigate } from '@reach/router';

export default class PostArticleButton extends Component {
  render() {
    const { uri } = this.props;
    return (
      <div className="postNewArticle">
        {console.log(uri)}
        {this.props.uri !== '/addNewArticle' && (
          <div>
            <h2>Would you like to post an article?</h2>
            <div className="postButton">
              <button onClick={this.handleClick}>Add a new Article</button>
            </div>
          </div>
        )}
      </div>
    );
  }

  handleClick = () => {
    navigate('/addNewArticle');
  };
}
