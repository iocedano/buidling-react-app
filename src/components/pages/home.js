'use strict';

var React = require('react');

var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>Training App</h1>
        <p> React, ReactDom, React Router and Flux for ultra-responsive web apps.</p>
      </div>
    );
  }
});

module.exports = Home;
