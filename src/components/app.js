'use strict';

var React = require('react');

var Home = require('./pages/home');
var About = require('./pages/about');
var Author = require('./pages/author');
var Header = require('./common/header');

var App = React.createClass({
  render: function() {
    var route = this.props.route || '';
    var Child;
    switch (route) {
      case "about":
        Child = About;
        break;
      case "author":
        Child = Author;
        break;
      default:
        Child = Home;
    }

    return (
      <div>
        <Header />
        <Child />
      </div>
    );
  }
});

module.exports = App;
