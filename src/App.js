import React, { Component } from 'react';
import { Router } from '@reach/router';
import Auth from './components/auth';
import Articles from './components/articles';
import Header from './components/header';
import Topics from './components/topics';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
// import Ads from './components/ads';
import * as api from './api';
import './App.css';
import SingleArticle from './components/singleArticle';

class App extends Component {
  state = { user: '' };
  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Header />
        <Sidebar user={user} logout={this.clearUser} />
        <Topics path="/topics" />
        <Router className="main">
          <SingleArticle path="/articles/:article_id" />
          <Articles path="/" />
          <Articles path="/topics/:topic" />
        </Router>
        <Auth user={user} login={this.setUser} />
        <Footer />
      </div>
    );
  }
  setUser = username => {
    api.fetchUser(username).then(user => this.setState({ user }));
  };
  clearUser = () => {
    this.setState({ user: '' });
  };
}

export default App;
