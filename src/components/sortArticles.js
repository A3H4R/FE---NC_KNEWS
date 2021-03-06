import React, { Component } from 'react';
import * as api from '../api';

export class SortArticles extends Component {
  state = {
    sort_by: 'created_at',
    sort_order: 'DESC',
    limit: 10,
    page: 1,
  };
  render() {
    return (
      <div>
        <form className="sortArticlesForm" onSubmit={this.handleSubmit}>
          <label className="sortby_label">Sort by:</label>
          <select
            className="sortby_dropdown"
            id="sort_by"
            onChange={this.handleSortCriteria}
          >
            <option value="" />

            <option disabled value={null}>
              Select A filter
            </option>
            <option value="author">Author</option>
            <option value="comment_count">Comments</option>
            <option value="created_at">Date</option>
            <option value="votes">Popularity</option>
            <option value="title">Title</option>
          </select>
          <label className="order_label"> Order:</label>
          <select
            className="order_dropdown"
            id="sort_order"
            onChange={this.handleSortCriteria}
          >
            <option value="" />
            <option disabled value={null}>
              Select A filter
            </option>
            <option value="ASC">Ascending</option>
            <option value="DESC">Descending</option>
          </select>
          <label className="limit_label">Results per Page:</label>
          <select
            className="limit_dropdown"
            id="limit"
            onChange={this.handleSortCriteria}
          >
            <option value="" />
            <option disabled value={null}>
              Select a number
            </option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <button id="filter_button" className="redButton">
            Filter Results
          </button>
        </form>
      </div>
    );
  }

  handleSortCriteria = event => {
    const { value } = event.target;
    const field = event.target.id;

    this.setState({
      [field]: value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { sort_by, sort_order, limit, page } = this.state;
    const { topic, username } = this.props;
    if (username) {
      api
        .getArticlesByUsername(username, page, limit, sort_by, sort_order)
        .then(({ articles, total_count }) => {
          this.props.updateSortedArticles(
            articles,
            total_count,
            page,
            limit,
            sort_by,
            sort_order
          );
        });
    } else {
      api
        .getArticles(topic, page, limit, sort_by, sort_order)
        .then(({ articles, total_count }) => {
          this.props.updateSortedArticles(
            articles,
            total_count,
            page,
            limit,
            sort_by,
            sort_order
          );
        });
    }
  };
}

export default SortArticles;
