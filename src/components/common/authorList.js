'use strict';

var React = require('react');

var AuthorList = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },
  _renderAuthor: function(author) {
    return (
      <tr key={author.id}>
        <td><a href={"/#author/" + author.id}>{author.id}</a></td>
        <td>{author.firstName} {author.lastName}</td>
      </tr>
    )
  },
  render: function() {
    var authors = this.props.authors || [];
    var authorList = authors.map(this._renderAuthor);

    return (
      <table className="table">
        <thead>
          <th>ID</th>
          <th>Name</th>
        </thead>
        <tbody>
          {authorList}
        </tbody>
      </table>
    );
  }
});

module.exports = AuthorList;
