'use strict';

// var React = require('react');
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

const App = require('./components/app');
const Home = require('./components/pages/home');
const Author = require('./components/pages/author');
const About = require('./components/pages/about');


const Routers = (
<Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="author" component={Author} />
    <Route path="about" component={About} />
  </Route>
</Router>
);

export default Routers;
