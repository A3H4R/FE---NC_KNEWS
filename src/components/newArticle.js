import React, { Component } from 'react';
import * as api from '../api';
import { navigate } from '@reach/router';

class NewArticle extends Component {
  state = {
    chosenTopic: '',
    newArticleBody: '',
    newArticleTitle: '',
    topics: [],
    newSlug: '',
    newDescription: '',
    isNewArticleAdded: false,
  };
  render() {
    const { topics } = this.state;
    return (
      <section className="NewArticlePage">
        <div className="NewArticleSection">
          <p>Your Article's Are Awesome, Let's Add Another One :)</p>
          <form onSubmit={this.handlePostArticle}>
            <label>Topic: </label>
            <select required onChange={this.selectedTopic}>
              <option value="" />
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
            <input
              onChange={this.handleNewItem}
              id="newArticleTitle"
              required
            />
            <label>Body:</label>
            <input onChange={this.handleNewItem} id="newArticleBody" required />
            <button>Post Article</button>
          </form>
        </div>
        <br />
        <div className="NewTopicSection" />
        <p>Can't Find Your Topic?</p>
        <p>Create One Below</p>
        <form onSubmit={this.handleAddNewTopic}>
          <label>Topic Name:</label>
          <input onChange={this.handleNewItem} id="newSlug" required />
          <label>Description:</label>
          <input onChange={this.handleNewItem} id="newDescription" required />
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

  handleNewItem = event => {
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
    console.log('hi', chosenTopic);

    api.postNewArticle(chosenTopic, data).then(res => {
      console.log('hi', chosenTopic);
      navigate(`/topics/${chosenTopic}`, {
        state: { isNewArticleAdded: true },
      });
      // window.history.back();
    });
  };

  handleAddNewTopic = event => {
    event.preventDefault();
    const { newSlug, newDescription } = this.state;
    const data = {
      slug: newSlug,
      description: newDescription,
    };
    api.postNewTopic(data).then(newTopic => {
      this.props.newTopicUpdater(newTopic);
    });
  };
}

export default NewArticle;
