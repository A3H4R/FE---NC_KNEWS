import React, { Component } from 'react';
import * as api from '../api';
import { Link } from '@reach/router';
import './CSS/topics.css';

export class Topics extends Component {
  state = {
    topics: [],
  };
  render() {
    const { topics } = this.state;
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
  componentDidMount() {
    this.fetchTopics();
  }
  fetchTopics = () => {
    api.getTopics().then(topics => {
      this.setState({ topics });
    });
  };
}

export default Topics;
