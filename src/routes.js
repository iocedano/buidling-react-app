'use strict';

// var React = require('react');
import React from 'react';
import App from './components/app';
import NotFoundPage from './components/pages/404'
const Home = require('./components/pages/home');
const Author = require('./components/pages/author');
const About = require('./components/pages/about');

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    {
      path: 'about',
      component: About,
      onEnter: About.onEnter,
      onLeave: About.onLeave
     },
    {
      path: 'author',
      component: Author },
    {
      path: '*',
      component: NotFoundPage }
  ]
}

export default routes;
