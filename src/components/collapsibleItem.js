import React, { Component } from 'react';
import CollapsibleItemChildren from './collapsibleItemChildren';
import './CSS/collapsibleItem.css';

export default class CollapsibleItem extends Component {
  state = {
    isExpanded: false,
  };
  render() {
    const { title, children } = this.props;

    return (
      <div className="collapsibleContainer">
        <h1 className="collapsibleItemTitle" onClick={this.isExpanded}>
          {title}
        </h1>
        {!this.state.isExpanded && (
          <CollapsibleItemChildren children={children} />
        )}
      </div>
    );
  }
  isExpanded = event => {
    const { isExpanded } = this.state;

    event.preventDefault();
    this.setState({ isExpanded: !isExpanded });
  };
}
