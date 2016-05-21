$ = jQuery = require('jquery');
var ReactDom = require('react-dom');
var React = require('react');

var Home = require('./components/pages/home');
var About = require('./components/pages/about');
var Author = require('./components/pages/author');
var Header = require('./components/common/header');

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

function render() {
  var route = window.location.hash.substr(1);
  ReactDom.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();
