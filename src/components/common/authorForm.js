import React from 'react';
import Input from './Input';

class AuthorForm extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        author: { id:'', firstName: '', lastName: ''}
      };
    }

  _onChange(event) {
    if (!this.state.author) {
      this.state.author = {};
    }
    this.state.author[event.target.name] = event.target.value;
    this.setState({author: this.state.author});
  }

  _onClick(event) {
    if (typeof this.props.onSave === 'function') {
      this.props.onSave(event, this.state.author);
    }
  }

  render() {
    return (
      <form>
        <h1>Manage Author</h1>
        <Input name="firstName" ref="firstName" label="First Name" placeholder="First Name" onChange={this._onChange.bind(this)} />
        <br />
        <Input name="lastName" ref="lastName" label="Last Name" placeholder="Last Name" onChange={this._onChange.bind(this)} />
        <br />
        <input type="submit" value="Save" className="btn btn-default" onClick={this._onClick.bind(this)} />
      </form>
    );
  }
}

export default AuthorForm;
