'use strict';

import React from 'react';
import { Link } from 'react-router';

const ACTIVE = { color: 'red' };

class Header  extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">Brand</Link>
            </div>

            <div className="collapse navbar-collapse" id="navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/author" activeStyle={ACTIVE}>Author</Link></li>
                <li><Link to="/about" activeStyle={ACTIVE}>About</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;
