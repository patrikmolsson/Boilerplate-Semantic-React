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
      <Route path="/home/" component={Home} />
      <Redirect from="/" to="/home/" />
    </Switch>
  );
}
