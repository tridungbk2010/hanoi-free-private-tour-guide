import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import Login from './containers/login/Login';
import Register from './containers/register/RequestDemo';
import RequestSuccess from './containers/register/RequestSuccess';
import Blog from './containers/blog/Blog';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="login" component={Login}/>
    <Route path="register" component={Register}/>
    <Route path="blog" component={Blog}/>
    <Route path="request-success" component={RequestSuccess}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
