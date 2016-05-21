'use strict';

var React = require('react');
var AuthorApi = require('../../api/authorApi');

var Author = React.createClass({
  getInitialState: function() {
    return {
      authors: []
    }
  },
  componentWillMount: function() {
    // Ajax to get the datas
    this.setState({ authors: AuthorApi.getAllAuthors() });
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
    var authors = this.state.authors.map(this._renderAuthor);

    return (
      <div>
        <h1>Authors</h1>
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Name</th>
          </thead>
          <tbody>
            {authors}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = Author;
