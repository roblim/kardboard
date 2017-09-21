import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { signUp, logIn, logOut } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  // testing start
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signUp = signUp;
  window.logIn = logIn;
  window.logOut = logOut;
  // testing end

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
