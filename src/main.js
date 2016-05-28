// $ = jQuery = require('jquery');
import ReactDom from 'react-dom';
import React, { component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/app';
const Home = require('./components/pages/home');
const Author = require('./components/pages/author');
const About = require('./components/pages/about');

ReactDom.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="author" component={Author} />
      <Route path="about" component={About} />
    </Route>
  </Router>
), document.getElementById('app'));
