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
      <section className="NewArticlePage">
        <div className="NewArticleSection">
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
        <br />
        <div className="NewTopicSection" />
        <p>Can't Find Your Topic?</p>
        <p>Create One Below</p>
        <form onSubmit={this.handleAddNewTopic}>
          <label>Topic Name:</label>
          <input onChange={this.handleNewTopic} id="newSlug" />
          <label>Description:</label>
          <input onChange={this.handleNewTopic} id="newDescription" />
          <button>Post New Topic</button>
        </form>
      </section>
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

  handleNewTopic = event => {
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

  handleAddNewTopic = event => {
    event.preventDefault();
    const { newSlug, newDescription } = this.state;
    const data = {
      slug: newSlug,
      description: newDescription,
    };
    api.postNewTopic(data);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.topics !== this.state.topics) {
      this.fetchTopics();
    }
  }
}

export default NewArticle;
