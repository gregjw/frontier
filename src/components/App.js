/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  withRouter
} from 'react-router-dom';

import Navigation from "./Navigation";
import HomePage from "./Home";
import Login from "./LogIn";
import Signup from "./SignUp";
import Dashboard from "./Dashboard";
// import NotFoundPage from "./NotFoundPage";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={HomePage} />
        {/* <Route component={NotFoundPage} /> */}
      </div>
    </Router>
  );
}

export default App;