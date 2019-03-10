import React, { Component } from 'react';
import * as api from '../api';
import Comments from './comments';
import Votes from './votes';
import { navigate } from '@reach/router';
import './CSS/singleArticle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    isDeleted: false,
    error_message: '',
  };
  render() {
    const { user } = this.props;
    const { article, isLoading } = this.state;

    if (isLoading) return <h3>Loading article...</h3>;
    return (
      <div className="articleContainer">
        {article !== {} && (
          <div className="articleContentCard">
            <div className="borderArea">
              {/* <span className="article_id">
                article id: {article.article_id}
              </span> */}
              <span className="article_topic">
                <FontAwesomeIcon
                  icon="angle-double-left"
                  className="usericon"
                />{' '}
                {article.topic}{' '}
                <FontAwesomeIcon
                  icon="angle-double-right"
                  className="usericon"
                />
              </span>

              <h1 className="article_title">{article.title}</h1>
              <div className="articleDetailsContainer">
                <h2 className="articleDetails">
                  Author: <FontAwesomeIcon icon="user" className="usericon" />
                  {article.author} {article.created_at.substring(0, 10)}
                  <h2 className="article_created_at" />
                </h2>
                {/* <h3 className="article_topic">
                  <FontAwesomeIcon
                    icon="angle-double-left"
                    className="usericon"
                  />
                  {article.topic}{' '}
                  <FontAwesomeIcon
                    icon="angle-double-right"
                    className="usericon"
                  />
                </h3> */}
              </div>

              <p className="article_body">{article.body}</p>
            </div>
            <div className="article_buttons_container">
              {user.username === article.author && (
                // <button
                //   className="article_delete_button"
                //   onClick={this.handleDelete}
                // >
                //   Delete Article
                // </button>

                <div
                  className="article_delete_button"
                  onClick={this.handleDelete}
                >
                  <FontAwesomeIcon icon="trash" /> Article
                </div>
              )}
              <Votes
                article_id={article.article_id}
                votes={article.votes}
                user={user}
              />
            </div>
          </div>
        )}

        <div className="commentsContainer">
          {article.article_id && (
            <Comments user={user} article_id={article.article_id} />
          )}
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.fetchArticleById();
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.fetchArticleById();
    }
  }
  fetchArticleById = () => {
    const { article_id } = this.props;

    api
      .getArticleById(article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(error => {
        navigate('/error', {
          replace: true,
          state: {
            error_message: error.response.data.message,
            from: '/',
          },
        });
      });
  };

  handleDelete = () => {
    const { article_id } = this.props;
    api
      .deleteItem(article_id)
      .then(res => {
        this.props.navigate('/', { state: { isDeleted: true } });
      })
      .catch(error => {
        navigate('/error', {
          replace: true,
          state: {
            error_message: error.response.data.message,
            from: '/',
          },
        });
      });
  };
}

export default SingleArticle;
