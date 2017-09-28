import { actions } from 'redux-notifications';

const { notifSend } = actions;

const TIMER = 3000;
const DEFAULT_SUCCESS_MESSAGE = 'Åtgärden har lyckats!';
const DEFAULT_ERROR_MESSAGE = 'Något gick snett...';

const defaultMessageObject = {
  dismissAfter: TIMER,
};

const errorCodes = {
  ER_DUP_ENTRY: 'Det finns redan en entitet med dessa värden',
  ER_ROW_IS_REFERENCED_2: 'Kan ej ta bort. Det finns innehåll kopplat till entiteten',
};

function getErrorMessageFromError(err) {
  console.log(err);


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
