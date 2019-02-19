import React, { Component } from 'react'
import { Link } from "@reach/router";

export class Nav extends Component {
  render() {
    return (
      <div className="nav">
              <nav>
      <Link to="/">Home</Link>
{" | "}
<Link to="/articles">Articles</Link>
{" | "}
<Link to="/topics">Topics</Link>
      </nav>
      </div>
    )
  }
}

export default Nav
