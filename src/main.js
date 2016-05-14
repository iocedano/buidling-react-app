$ = jQuery = require('jquery');
var ReactDom = require('react-dom');
var React = require('react');

var Home = require('./components/pages/home');
var About = require('./components/pages/about');


ReactDom.render(<Home />, document.getElementById('app'));
