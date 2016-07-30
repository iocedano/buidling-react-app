'use strict';

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('../common/authorList');
import { Link } from 'react-router';

import AuthorActions from '../../actions/authorActions';
import AuthorStore from '../../stores/authorStore';

var Author = React.createClass({
  getInitialState: function() {
    return {
      authors: AuthorStore.getAllAuthors()
    }
  },
  componentWillMount: function() {
    AuthorStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    AuthorStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState({author: AuthorStore.getAllAuthors()});
  },
  render: function() {
    return (
      <div>
        <h1>Authors</h1>
        <Link to="/addAuthor" className="btn btn-default">Add Author</Link>
        <AuthorList authors={this.state.authors} />
      </div>
    );
  }
});

module.exports = Author;
