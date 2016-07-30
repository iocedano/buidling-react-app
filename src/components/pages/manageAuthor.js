'use strict';

var React = require('react');
var authorApi = require('../../api/authorApi');
import AuthorForm from '../common/authorForm';
import AuthorActions from '../../actions/authorActions';

var ManageAuthor = React.createClass({
  _onSave: function(event, author) {
    event.preventDefault();
    AuthorActions.createAuthor(author);
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
