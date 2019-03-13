import React from 'react';
import { Link } from '@reach/router';
import './CSS/topics.css';
import ArticleShowcase from './articleShowcase';
const bkg = require('../images/topics.jpg');
let imagePath;

export default function Topics({ topics }) {
  return (
    <div className="topicsContainer">
      <ArticleShowcase />
      <div className="topicCards" />
      {topics.map(topic => (
        <div className="topicCard" key={topic.slug}>
          <Link to={`/topics/${topic.slug}`} className='className="topicSlug"'>
            <img src={bkg} alt="" className="topicCardBackground" />
            <img src={topic.image} alt="" className="topicCardImage" />
            {/* {
              (imagePath = `../images/${topic.slug}.jpg`(
                imagePath ? (
                  <img
                    src={require(imagePath)}
                    alt=""
                    className="topicCardImage"
                  />
                ) : (
                  <img
                    src="https://i.imgur.com/b9app99.png"
                    alt=""
                    className="topicCardImage"
                  />
                )
              ))
            } */}
            {/* <img
              src="https://i.imgur.com/b9app99.png"
              alt=""
              className="topicCardImage"
            /> */}

            <h1>{topic.slug[0].toUpperCase() + topic.slug.slice(1)}</h1>
            <p className="topicDescription">{topic.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
