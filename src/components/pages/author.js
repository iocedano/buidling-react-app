'use strict';

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('../common/authorList');

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
        <AuthorList authors={this.state.authors} />
      </div>
    );
  }
});

module.exports = Author;
