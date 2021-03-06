import React, { Component } from 'react';
import { Router } from '@reach/router';
import Auth from './components/auth';
import Articles from './components/articles';
import Header from './components/header';
import Topics from './components/topics';
import SingleArticle from './components/singleArticle';
import LoginInfo from './components/loginInfo';
import ErrorHandling from './components/errorHandling';
import AddNewArticlePage from './components/addNewArticlePage';
import Users from './components/users';
import LatestSection from './components/latestSection';
import Footer from './components/footer';

import * as api from './api';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faUser,
  faSignOutAlt,
  faTrash,
  faThumbsUp,
  faThumbsDown,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faClock,
  faComments,
  faStar,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import UserArticles from './components/userArticles';

library.add(
  fab,
  faUser,
  faSignOutAlt,
  faTrash,
  faThumbsUp,
  faThumbsDown,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faClock,
  faComments,
  faStar,
  faBars
);

class App extends Component {
  state = { user: '', topics: [], isLoading: true };
  render() {
    const { user, topics } = this.state;

    return (
      <div className="App">
        <Header logout={this.clearUser} />
        <div className="components">
          <LoginInfo user={user} />
          <Auth user={user} login={this.setUser}>
            <LatestSection />
            <Router className="main">
              <SingleArticle user={user} path="/articles/:article_id" />
              <Articles path="/articles" user={user} />
              <Articles path="/topics/:topic" />
              <Users path="/users" />
              <Topics path="/topics" topics={topics} />
              <ErrorHandling path="/error" />
              <AddNewArticlePage
                path="/addNewArticle"
                user={user}
                topics={topics}
                newTopicUpdater={this.newTopicUpdater}
              />
              <UserArticles path="/userArticles/:username" user={user} />
            </Router>
            <Footer />
          </Auth>
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchTopics();

    const retrievedState = localStorage.getItem('state');
    if (retrievedState) {
      this.setState(JSON.parse(retrievedState));
    }
  };

  componentDidUpdate() {
    this.handleSave();
  }

  handleSave = () => {
    localStorage.setItem('state', JSON.stringify(this.state));
  };

  setUser = username => {
    api
      .fetchUser(username)
      .then(user => this.setState({ user }))
      .catch(error => {
        alert('Login Failed: Incorrect Username Entered');
      });
  };
  clearUser = () => {
    this.setState({ user: '' });
  };
  fetchTopics = () => {
    api.getTopics().then(topics => {
      this.setState({ topics });
    });
  };

  newTopicUpdater = newTopic => {
    this.setState(state => {
      return { topics: [...state.topics, newTopic] };
    });
  };
}

export default App;
