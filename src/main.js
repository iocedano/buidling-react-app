$ = jQuery = require('jquery');
var ReactDom = require('react-dom');
var React = require('react');

var App = require('./components/app');

function render() {
  var route = window.location.hash.substr(1);
  ReactDom.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();
