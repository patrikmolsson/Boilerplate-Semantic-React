import React from 'react';
import { Notifs } from 'redux-notifications';
import Notification from './components/Notification';

import './styles.scss';

function NotificationWrapper() {
  return (
    <Notifs styleName="wrapper" CustomComponent={Notification} />
  );
}

NotificationWrapper.propTypes = {};
NotificationWrapper.defaultProps = {};

export default NotificationWrapper;
