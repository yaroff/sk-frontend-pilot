/**
 *
 * App.js
 *
 * This component is skeleton around actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * linting exception.
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AuthPage from 'containers/AuthPage/';
import SignupPage from 'containers/AuthPage/';

import './main.css';

export default function App() {
  const loggedIn = false;
  return (
    <div>
      <Switch>
        <Route path="/auth/login" component={AuthPage} />
        <Route path="/auth/signup" component={SignupPage} />
        <Route exact path="/404" component={NotFoundPage} />
        <Route push path="/" render={() => (
          loggedIn ? (
            <Redirect to="/dashboard"/>
          ) : (
            <Redirect to="/auth/login"/>
          )
        )}/>
      </Switch>
    </div>
  );
}
