'use strict';

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('../common/authorList');
import { Link } from 'react-router';

var Author = React.createClass({
  getInitialState: function() {
    return {
      authors: []
    }
  },
  componentDidMount: function() {
    // Ajax to get the datas
    if (this.isMounted()) {
      this.setState({ authors: AuthorApi.getAllAuthors() });
    }
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
