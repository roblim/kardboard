import {
  postUser,
  postSession,
  deleteSession } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const LOG_OUT = 'LOG_OUT';

export const receiveCurrentUser = currentUser => {
  window.currentUser = currentUser;
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const receiveSignupErrors = errors => ({
  type: RECEIVE_SIGNUP_ERRORS,
  errors
});

export const completeLogOut = () => {
  window.currentUser = undefined;
  return {
    type: LOG_OUT
  };
};

export const signUp = (newUser) => (dispatch) => (
  postUser(newUser).then(
    (createdUser) => (dispatch(receiveCurrentUser(createdUser))),
    (errors) => (dispatch(receiveSignupErrors(errors.resonseJSON))
  ))
);

export const logIn = (user) => (dispatch) => (
  postSession(user).then(
    (loggedInUser) => (dispatch(receiveCurrentUser(loggedInUser))),
    (errors) => (dispatch(receiveSessionErrors(errors.responseJSON))
  ))
);

export const logOut = () => (dispatch) => (
  deleteSession().then(
    () => (dispatch(completeLogOut())),
    (errors) => (dispatch(receiveSessionErrors(errors)))
  )
);
