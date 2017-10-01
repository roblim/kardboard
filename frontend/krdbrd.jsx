import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import{
  fetchBoards,
  fetchBoard,
  createBoard,
  updateBoard,
  destroyBoard
} from './actions/board_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
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
  // testing end

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
