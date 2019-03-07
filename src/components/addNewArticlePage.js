import React, { Component } from 'react';
// import { navigate } from '@reach/router';
import NewArticle from './newArticle';

export default class AddNewArticlePage extends Component {
  render() {
    const { user, topics, newTopicUpdater } = this.props;
    return (
      <div className="addNewArticlePage">
        <NewArticle
          user={user}
          topics={topics}
          newTopicUpdater={newTopicUpdater}
        />
      </div>
    );
  }
}
