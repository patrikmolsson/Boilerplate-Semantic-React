import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/styles.scss';

import Notification from './components/NotificationWrapper';

export default function App({ children }) {
  return (
    <div>
      <Notification />
      <Router>
        {children}
      </Router>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};
