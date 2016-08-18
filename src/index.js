/* eslint-disable import/default */
import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import {Router, browserHistory, applyRouterMiddleware} from "react-router";
import routes from "./routes";
import { useScroll } from 'react-router-scroll';
import "./styles/styles.scss";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
require('./favicon.ico');

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}
            routes={routes}
            render={applyRouterMiddleware(useScroll())}
    />
  </Provider>, document.getElementById('app')
);
