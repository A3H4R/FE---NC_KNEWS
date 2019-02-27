import React, { Component } from 'react';
import * as api from '../api';
import { Link } from '@reach/router';
import './CSS/topics.css';

export class Topics extends Component {
  render() {
    const { topics } = this.props;
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
}

export default Topics;
