import React, { Component } from 'react';
import * as api from '../api';
import { navigate } from '@reach/router';
import './CSS/newArticle.css';
import ArticleShowcase from './articleShowcase';

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
        <ArticleShowcase />
        <div className="NewArticleSection">
          <p>Your Article's Are Awesome, Let's Add Another One :)</p>
          <form className="newArticleForm" onSubmit={this.handlePostArticle}>
            <label className="topic_label">Topic: </label>
            <select
              required
              className="topic_dropdown"
              onChange={this.selectedTopic}
            >
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

            <label className="title_label">Title:</label>
            <input
              className="title_input"
              onChange={this.handleNewItem}
              id="newArticleTitle"
              required
            />
            <label className="body_label">Body:</label>
            <input
              className="body_input"
              onChange={this.handleNewItem}
              id="newArticleBody"
              required
            />
            <button className="postArticleButton">Post Article</button>
          </form>
        </div>

        <div className="NewTopicSection" />
        <p>Can't Find Your Topic?</p>
        <p>Create One Below</p>
        <form className="newTopicForm" onSubmit={this.handleAddNewTopic}>
          <label className="topic_label">Topic Name:</label>
          <input
            className="topic_input"
            onChange={this.handleNewItem}
            id="newSlug"
            required
          />
          <label className="description_label">Description:</label>
          <input
            className="description_input"
            onChange={this.handleNewItem}
            id="newDescription"
            required
          />
          <button className="postTopicButton">Post New Topic</button>
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

    api.postNewArticle(chosenTopic, data).then(res => {
      navigate(`/topics/${chosenTopic}`, {
        state: { isNewArticleAdded: true, from: '/' },
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
      image: 'https://i.imgur.com/b9app99.png',
    };
    api.postNewTopic(data).then(newTopic => {
      this.props.newTopicUpdater(newTopic);
    });
  };
}

export default NewArticle;
