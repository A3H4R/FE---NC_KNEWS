import React, { Component } from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Nav extends Component {
  render() {
    const { logout } = this.props;
    return (
      <div className="nav">
        <nav className="nav_container">
          <ul>
            <li>
              <Link to="/" className="nav_home">
                Home
              </Link>
            </li>

            <li>
              <Link to="/articles" className="nav_articles">
                Articles
              </Link>
            </li>

            <li>
              <Link to="/topics" className="nav_topics">
                Topics
              </Link>
            </li>

            <li>
              <Link to="/" className="nav_users">
                Users
              </Link>
            </li>
            <li>
              <Link to="/" className="nav_users">
                <FontAwesomeIcon icon="user" />
              </Link>
            </li>
            <li>
              <Link to="/" onClick={logout} className="nav_users">
                <FontAwesomeIcon icon="sign-out-alt" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
