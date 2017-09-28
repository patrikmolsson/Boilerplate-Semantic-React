import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { reducer as notifReducer } from 'redux-notifications';
import moment from 'moment';

import App from 'app';
import Routes from 'routes';

moment.locale('sv');

/* eslint-disable no-underscore-dangle */
const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)(createStore);

const store = createStoreWithMiddleware(
  combineReducers({ notifs: notifReducer }),
  {},
);
/* eslint-enable */


const app = (
  <Provider store={store}>
    <App>
      <Routes />
    </App>
  </Provider>
);

const el = document.getElementById('app');
render(app, el);
