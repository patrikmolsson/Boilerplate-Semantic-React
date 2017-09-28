import React from 'react';
import { connect } from 'react-redux';
import { actions } from 'redux-notifications';
import { Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleDismiss() {
    this.props.dispatch(actions.notifDismiss(this.props.id));
  }

  render() {
    return (
      <Message
        onDismiss={this.handleDismiss}
        {...{ [this.props.kind]: true }}
      >
        {this.props.message}
      </Message>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  kind: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};
Notification.defaultProps = {
  kind: 'info',
};

export default connect()(Notification);
