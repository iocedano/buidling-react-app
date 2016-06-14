'use strict';

var React = require('react');
var authorApi = require('../../api/authorApi');
import AuthorForm from '../common/authorForm';

var ManageAuthor = React.createClass({
  _onSave: function(event, author) {
    event.preventDefault();
    authorApi.saveAuthor(author);
  },
  render: function() {
    return (
      <div>
        <AuthorForm onSave={this._onSave} />
      </div>
    );
  }
});

module.exports = ManageAuthor;
