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
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AuthPage from 'containers/AuthPage/index';

import './main.css';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/auth" component={AuthPage} />
        <Route exact path="/404" component={NotFoundPage} />
        <Route path="/" component={AuthPage} />
      </Switch>
    </div>
  );
}
