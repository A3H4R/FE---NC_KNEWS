import React from 'react';
import { Link } from '@reach/router';
import './CSS/topics.css';

export default function Topics({ topics }) {
  console.log(topics);
  return (
    <div className="topics">
      <span className="topic_text">Topics: </span>
      {topics.map(topic => (
        <span className="topic_mapped_text" key={topic.slug}>
          <Link to={`/topics/${topic.slug}`}>
            {topic.slug[0].toUpperCase() + topic.slug.slice(1)}|
          </Link>
        </span>
      ))}
    </div>
  );
}
