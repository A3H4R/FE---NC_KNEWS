import React, { Component } from 'react';
import * as api from '../api';

class NewArticle extends Component {
  state = {
    chosenTopic: '',
    newArticleBody: '',
    newArticleTitle: '',
    topics: [],
    newSlug: '',
    newDescription: '',
  };
  render() {
    const { topics } = this.state;
    return (
      <div>
        <p>Your Article's Are Awesome, Let's Add Another One :)</p>
        <form onSubmit={this.handlePostArticle}>
          <label>Topic: </label>
          <select onChange={this.selectedTopic}>
            <option disabled value={null}>
              Select A Topic
            </option>
            {topics &&
              topics.map(topic => {
                return (
                  <option key={topic.slug} value={topic.slug}>
                    {topic.slug[0].toUpperCase() + topic.slug.slice(1)}
                  </option>
                );
              })}
          </select>
          <br />
          <label>Title:</label>
          <input onChange={this.handleNewArticle} id="newArticleTitle" />
          <label>Body:</label>
          <input onChange={this.handleNewArticle} id="newArticleBody" />
          <button>Post Article</button>
        </form>
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

  selectedTopic = event => {
    const { value } = event.target;
    this.setState({ chosenTopic: value });
  };

  handleNewArticle = event => {
    const { value } = event.target;
    const field = event.target.id;

    this.setState({
      [field]: value,
    });
  };

  handlePostArticle = event => {
    event.preventDefault();
    const { newArticleBody, newArticleTitle, chosenTopic } = this.state;
    const { username } = this.props.user;
    const data = {
      body: newArticleBody,
      title: newArticleTitle,
      username: username,
    };
    api.postNewArticle(chosenTopic, data);
  };
}

export default NewArticle;
