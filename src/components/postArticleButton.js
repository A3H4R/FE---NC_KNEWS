import React, { Component } from 'react';
import { Link } from '@reach/router';
import './CSS/postArticleButton.css';
import * as api from '../api';
import Moment from 'react-moment';
export default class postArticleButton extends Component {
  state = {
    lastArticle: '',
    limit: 10,
    page: 1,
    sort_by: 'created_at',
    sort_order: 'DESC',
  };
  render() {
    const { lastArticle } = this.state;
    const { username } = this.props.user;

    return (
      <div className="postArticleButtonContainer">
        {lastArticle ? (
          <span className="lastArticleHeading">
            Hey {username.substring(0, 1).toUpperCase() + username.substring(1)}
            , you last posted an article{' '}
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
    const { page, limit, sort_by, sort_order } = this.state;

    api
      .getArticlesByUsername(username, page, limit, sort_by, sort_order)
      .then(articles => {
        this.setState({ lastArticle: articles.articles[0] });
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
