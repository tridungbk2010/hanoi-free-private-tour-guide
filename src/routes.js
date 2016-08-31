import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import Login from './containers/login/Login';
import HandleRegister from './containers/tourist/HandleRegister';
import About from './containers/about/About';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="login" component={Login}/>
    <Route path="book-tour" component={HandleRegister}/>
    <Route path="about" component={About}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
