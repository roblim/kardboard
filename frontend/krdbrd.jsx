import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { getBoards,
         getBoard,
         postBoard,
         patchBoard,
         deleteBoard } from './util/board_api_util';

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
  window.getBoards = getBoards;
  window.getBoard = getBoard;
  window.patchBoard = patchBoard;
  window.postBoard = postBoard;
  window.deleteBoard = deleteBoard; 
  // testing end

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
