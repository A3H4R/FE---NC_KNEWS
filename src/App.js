import React, { Component } from 'react';
import { Router } from '@reach/router';
import Articles from './components/articles';
import Header from './components/header';
import Topics from './components/topics';
import Nav from './components/nav';
import Home from './components/home';
// import Sidebar from './components/sidebar'
import Footer from './components/footer';
// import Users from './components/users'
import Ads from './components/ads';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Ads />
        <Router className="ain">
          <Home path="/" />
          <Topics path="/topics" />
          <Topics path="/topics/:topic/articles" />
          <Articles path="/articles" />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
