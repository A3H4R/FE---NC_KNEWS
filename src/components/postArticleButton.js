import React, { Component } from 'react';
import { Link } from '@reach/router';
import './CSS/postArticleButton.css';
import * as api from '../api';
import Moment from 'react-moment';
export default class postArticleButton extends Component {
  state = {
    lastArticle: {},
  };
  render() {
    const { lastArticle } = this.state;
    return (
      <div className="postArticleButtonContainer">
        {lastArticle ? (
          <span>
            Your last posted an article:{' '}
            <Moment fromNow>{lastArticle.created_at}</Moment>
          </span>
        ) : (
          <span>Hi, let's post your first article?</span>
        )}
        <Link to="/addNewArticle">
          <button id="postArticleButton" className="redButton">
            Post New Article
          </button>
        </Link>
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchArticlesByUsername();
  };
  fetchArticlesByUsername() {
    const { username } = this.props.user;
    api.getArticlesByUsername(username).then(articles => {
      this.setState({ lastArticle: articles[0] });
    });
  }
}

// import React from 'react';
// import { Link } from '@reach/router';
// import './CSS/postArticleButton.css';

// export default function PostArticleButton() {
//   return (
//     <div className="postArticleButtonContainer">
//       <span> Your last article was posted : 10 days ago</span>
//       <Link to="/addNewArticle">
//         <button id="postArticleButton" className="redButton">
//           Post New Article
//         </button>
//       </Link>
//     </div>
//   );
// }
