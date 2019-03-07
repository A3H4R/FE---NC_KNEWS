import React, { Component } from 'react';
import './CSS/articleShowCase.css';

export default class ArticleShowcase extends Component {
  state = { articles: {} };
  render() {
    return (
      <div className="articleDisplay">
        {/* <div className="overallContainer">1</div> */}
        <div className="articleDisplayContainer">
          <div className="articleDisplayContent">
            <div className="articleDisplayTopic">
              <h2> History</h2>
            </div>
            <h1> Ever Wonder How The Pyramids Were Built?</h1>
            <p className="articleDisplayArticle">
              I’ve always found the Egyptian pyramids to be extremely
              interesting. Especially the fact that we still don’t really know
              how these things were built. There’s dozens of ideas ranging from
              aliens to levitation. A lot of researchers have developed theories
              over the years to answer the question: How did the Egyptians built
              these magnificent pyramids?
            </p>
            <button className="articleDisplayReadMoreButton">Read More</button>
          </div>
        </div>
      </div>
    );
  }
}
