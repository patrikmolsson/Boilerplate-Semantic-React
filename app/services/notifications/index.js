import { actions } from 'redux-notifications';

const { notifSend } = actions;
const TIMER = 3000;

const DEFAULT_SUCCESS_MESSAGE = 'Success!';
const DEFAULT_ERROR_MESSAGE = 'Error...';

const defaultMessageObject = {
  dismissAfter: TIMER,
};

const errorCodes = {
  ER_ROW_EXISTS: 'The entity already exists',
};

function getErrorMessageFromError(err) {
  return (err && err.response && err.response.data && errorCodes[err.response.data.code])
    || DEFAULT_ERROR_MESSAGE;
}

function sendMessage({ dispatch, ...rest }) {
  dispatch(notifSend({ ...defaultMessageObject, ...rest }));
}

function sendSuccessMessage(input) {
  sendMessage({ kind: 'success', message: DEFAULT_SUCCESS_MESSAGE, ...input });
}

function sendErrorMessage(input) {
  const message = input.message || getErrorMessageFromError({ err: null, ...input.err });

  sendMessage({ kind: 'error', message, ...input, dismissAfter: null });
}

export {
  sendSuccessMessage,
  sendErrorMessage,
};
