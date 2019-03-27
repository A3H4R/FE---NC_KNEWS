import React, { Component } from 'react';
import './CSS/header.css';
import Nav from './nav';
import NavSidePanel from '../components/navSidePanel';
import { Location } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const logo = require('../images/NCKNEWS.png');

export default class header extends Component {
  state = {
    isClicked: false,
  };
  render() {
    const { isClicked } = this.state;
    const { logout } = this.props;
    console.log(isClicked + ' menu button Clicked');

    return (
      <div className="header">
        <div className="headerContents">
          <div className="headerLeft">
            <FontAwesomeIcon
              className="menuButton"
              icon="bars"
              onClick={this.handleClick}
            />
            <img className="logo" src={logo} alt="logo" />
          </div>
          <Nav logout={logout} />
        </div>
        <div>
          <Location>
            {({ location }) =>
              isClicked && (
                <NavSidePanel
                  key={location.key}
                  location={location}
                  toggleSidebar={this.handleClick}
                  sidebarOpen={isClicked}
                  logout={logout}
                />
              )
            }
          </Location>
        </div>
      </div>
    );
  }
  handleClick = event => {
    this.setState(prevstate => {
      return { isClicked: !prevstate.isClicked };
    });
  };

}
