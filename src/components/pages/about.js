var React = require('react');

var About = React.createClass({
  statics: {
    onEnter: function(nextState, replace, callback) {
      if (!confirm('Are you sure you read a page that \'s this boring?')) {
        replace({
          pathname: '/author',
          state: { nextPathname: nextState.location.pathname }
        });
        return;
      }
      callback();
    },
    onLeave: function() {
      confirm('Leave the page');
    }
  },
  render: function() {
    return (
      <div>
        <h1>About</h1>
        <p>
          This application uses the following technologies
        </p>
        <ul>
          <li>React</li>
          <li>React Dom</li>
          <li>React Router</li>
          <li>Flux</li>
          <li>NodeJs</li>
          <li>Gulp</li>
          <li>Browserify</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    )
  }
});

module.exports = About;
