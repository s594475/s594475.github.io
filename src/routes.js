
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import About from './components/About.js';
import Blog from './components/Blog.js';
import Post from './components/Post.js';
import App from './App.js';
import Home from './components/Home.js';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="blog" component={Blog} />
    <Route path="about" component={About} />
    <Route path="blog/:title" component={Post} />
  </Route>
)
