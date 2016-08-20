import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import Login from './containers/login/Login';
import RequestDemo from './containers/register/RequestDemo';
import RequestSuccess from './containers/register/RequestSuccess';
import RegisterPricing from './components/pricing/RegisterPricing';
import RegisterFeatures from './components/features/RegisterFeatures';
import Blog from './containers/blog/Blog';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="login" component={Login}/>
    <Route path="request-demo" component={RequestDemo}/>
    <Route path="register-pricing" component={RegisterPricing}/>
    <Route path="register-features" component={RegisterFeatures}/>
    <Route path="blog" component={Blog}/>
    <Route path="thankyou" component={RequestSuccess}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
