import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CSS/footer.css';
import { Link } from '@reach/router';

export default function Footer() {
  return (
    <div id="footer">
      <div className="footerContainer">
        <div className="socialMedia">
          <a href="https://www.facebook.com/northcoders/">
            <FontAwesomeIcon
              icon={['fab', 'facebook']}
              size="3x"
              className="facebook"
            />
          </a>
          <a href="https://twitter.com/northcoders">
            <FontAwesomeIcon
              icon={['fab', 'twitter']}
              size="3x"
              className="twitter"
            />
          </a>
          <a href="https://www.youtube.com/channel/UCjeCQwavOQ0KpS7sG_qnZbw">
            <FontAwesomeIcon
              icon={['fab', 'youtube']}
              size="3x"
              className="youtube"
            />
          </a>
        </div>
        <div className="siteLinks">
          <h3>Site Links</h3>
          <ul className="list">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/articles">
              <li>Articles</li>
            </Link>
            <Link to="/topics">
              <li>Topics</li>
            </Link>
            <Link to="/users">
              <li>Users</li>
            </Link>
          </ul>
        </div>
        <div className="copyright">
          <p>Mohammed Azhar &copy; 2019</p>
        </div>
      </div>
    </div>
  );
}
