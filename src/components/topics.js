import React, { Component } from 'react';
import * as api from '../api';
import { Link } from '@reach/router';
export class Topics extends Component {
  state = {
    topics: [],
  };
  render() {
    const { topics } = this.state;
    return (
      <div className="nav links">
        Topics
        {topics.map(topic => (
          <span key={topic.slug}>
            <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
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

    const { topic } = this.props;
    api.getArticleByTopic(topic);
  };
}

export default Topics;
