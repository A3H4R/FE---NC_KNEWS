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
    // if (showSidebar) {
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
                onClick={logout}
                className="nav_users"
                onClick={toggleSidebar}
              >
                <FontAwesomeIcon icon="sign-out-alt" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    this.setState({ location: this.props.location.href });
    console.log('CDM');
  };
  // hasPageChanged = () => {
  //   this.setState(prevState => {
  //     console.log(this.state.location + ' current location');
  //     console.log(prevState.location + ' prev location');
  //     console.log(this.state.location !== prevState.location);
  //     if (this.state.location !== prevState.location) {
  //       const response = true;
  //       this.props.closeSidebar(null, response);
  //     }
  //   });
  // };
  // }
  componentDidUpdate = (prevProps, prevState) => {
    console.log('CDU');
    console.log(this.state.location + ' current location');
    console.log(prevState.location + ' prev location');
    console.log(this.state.location !== prevState.location);
    console.log(this.props.location.href + ' this.props.location');
    console.log(prevProps.location.href + ' prev.props');

    if (this.state.location !== prevState.location) {
      const response = true;
      // this.props.closeSidebar(null, response);
    }
  };
}

// import React from 'react';

// export default function NavSidePanel(props) {
//   const logout = props.logout;
//   const showSidebar = props.showSidebar;
//   console.log(showSidebar + 'SIDEPANEL COMPONENT');

//   let sidePanelClass = 'navSidePanelContainer';
//   //   if (showSidebar) {
//   //     sidePanelClass = 'navsidePanelContainer.open';
//   //   }

//   return (
//     <div className={sidePanelClass}>
//       <div className="navLinks">
//         <ul>
//           <li>
//             <Link to="/" className="nav_home">
//               Home
//             </Link>
//           </li>

//           <li>
//             <Link to="/articles" className="nav_articles">
//               Articles
//             </Link>
//           </li>

//           <li>
//             <Link to="/topics" className="nav_topics">
//               Topics
//             </Link>
//           </li>

//           <li>
//             <Link to="/users" className="nav_users">
//               Users
//             </Link>
//           </li>
//           <li>
//             <Link to="/" className="nav_users">
//               <FontAwesomeIcon icon="user" />
//             </Link>
//           </li>
//           <li>
//             <Link to="/" onClick={logout} className="nav_users">
//               <FontAwesomeIcon icon="sign-out-alt" />
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
