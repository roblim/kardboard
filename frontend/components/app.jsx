import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import withScrolling, { createVerticalStrength, createHorizontalStrength } from 'react-dnd-scrollzone';

import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import BoardIndexContainer from './board_index/board_index_container';
import ListIndexContainer from './list_index/list_index_container';
import SecondaryNavBarContainer from './secondary_nav_bar/secondary_nav_bar_container'

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const ScrollZone = withScrolling('div');
const vStrength = createVerticalStrength(150);
const hStrength = createHorizontalStrength(300);

const App = () => (
  <div className="app-container">
    <Route path="/" component={NavBarContainer} />
    <Route path="/boards/:boardId" component={SecondaryNavBarContainer} />
    <ScrollZone
      className="content-area"
      strengthMultiplier={20}
      verticalStrength={vStrength}
      horizontalStrength={hStrength}
       >
      <Switch>
        <AuthRoute exact path="/" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <ProtectedRoute exact path="/boards" component={BoardIndexContainer} />
        <ProtectedRoute path="/boards/:boardId" component={ListIndexContainer} />
      </Switch>
    </ScrollZone>
  </div>
);

export default DragDropContext(HTML5Backend)(App);
