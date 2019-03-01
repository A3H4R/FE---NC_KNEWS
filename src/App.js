import React, { Component } from 'react';
import { Router } from '@reach/router';
import Auth from './components/auth';
import Articles from './components/articles';
import Header from './components/header';
import Topics from './components/topics';
import SingleArticle from './components/singleArticle';
import NewArticle from './components/newArticle';
import LoginInfo from './components/loginInfo';
import Footer from './components/footer';
import * as api from './api';
import './App.css';
import ErrorHandling from './components/errorHandling';
// import { navigate } from '@reach/router';

class App extends Component {
  state = { user: '', topics: [] };
  render() {
    const { user, topics } = this.state;

    return (
      <div className="App">
        <Header />
        <LoginInfo user={user} logout={this.clearUser} />
        <Auth user={user} login={this.setUser}>
          <Topics path="/topics" topics={topics} />
          <Router className="main">
            <SingleArticle user={user} path="/articles/:article_id" />
            <Articles path="/" />
            <Articles path="/topics/:topic" />
            <ErrorHandling path="/error" />
          </Router>
          <NewArticle
            user={user}
            topics={topics}
            newTopicUpdater={this.newTopicUpdater}
          />
        </Auth>
        <Footer />
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
        // navigate('/error', {
        //   replace: true,
        //   state: {
        //     error_message: error.response.data.message,
        //     from: '/',
        //   },
        // });
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
