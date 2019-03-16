import React, { Component } from 'react';
import DemoCarousel from './demoCarousel';
import LatestArticles from './latestArticles';
import './CSS/latestSection.css';

export default class LatestSection extends Component {
  render() {
    return (
      <div className="latestSection">
        <DemoCarousel />
        <LatestArticles />
      </div>
    );
  }
}
