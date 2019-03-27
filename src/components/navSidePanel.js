import React, { Component } from 'react';
import { Link } from '@reach/router';
// import { Location } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CSS/navSidePanel.css';

export default class navSidePanel extends Component {
  state = {
    location: '',
  };
  render() {
    console.log('.....rendering');
    const { logout, toggleSidebar } = this.props;

    let sidePanelClass = 'navSidePanelContainer';
    // if (sidebarOpen) {
    //   sidePanelClass = 'navsidePanelContainer.open';
    // }
    return (
      <div className={sidePanelClass}>
        <div className="navLinks">
          <ul>
            <li>
              <Link to="/" className="nav_home" onClick={toggleSidebar}>
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/articles"
                className="nav_articles"
                onClick={toggleSidebar}
              >
                Articles
              </Link>
            </li>

            <li>
              <Link to="/topics" className="nav_topics" onClick={toggleSidebar}>
                Topics
              </Link>
            </li>

            <li>
              <Link to="/users" className="nav_users" onClick={toggleSidebar}>
                Users
              </Link>
            </li>
            <li>
              <Link to="/" className="nav_users">
                <FontAwesomeIcon icon="user" onClick={toggleSidebar} />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="nav_users"
                onClick={function(event) {
                  logout();
                  toggleSidebar();
                }}
              >
                <FontAwesomeIcon icon="sign-out-alt" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
