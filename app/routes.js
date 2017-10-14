import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Home from 'scenes/Home';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  );
}
