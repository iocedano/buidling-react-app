import React from 'react';

class AuthorList extends React.Component {
  _renderAuthor (author, index) {
    return (
      <tr key={index}>
        <td><a href={'/#author/' + author.id}>{author.id}</a></td>
        <td>{author.firstName} {author.lastName}</td>
      </tr>
    );
  }

  render() {
    let authors = this.props.authors || [];
    let authorList = authors.map(this._renderAuthor);

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
}

AuthorList.propTypes = {
  authors: React.PropTypes.array.isRequired
};

export default AuthorList;
