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

import withScrolling, { createHorizontalStrength, createVerticalStrength } from 'react-dnd-scrollzone';

import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import BoardIndexContainer from './board_index/board_index_container';
import ListIndexContainer from './list_index/list_index_container';
import SecondaryNavBarContainer from './secondary_nav_bar/secondary_nav_bar_container'

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const ScrollingComponent = withScrolling('div');
const linearHorizontalStrength = createHorizontalStrength(700);
const linearVerticalStrength = createVerticalStrength(700);

// this easing function is from https://gist.github.com/gre/1650294 and
// expects/returns a number between [0, 1], however strength functions
// expects/returns a value between [-1, 1]
function ease(val) {
  const t = val / 2 + 1; // [-1, 1] -> [0, 1]
  const easedT = t<.5 ? 2*t*t : -1+(4-2*t)*t;
  return easedT * 2 - 1; // [0, 1] -> [-1, 1]
}

function hStrength(box, point) {
  return ease(linearHorizontalStrength(box, point));
}

function vStrength(box, point) {
  return ease(linearVerticalStrength(box, point));
}

const App = () => (
  <div className="app-container">
    <Route path="/" component={NavBarContainer} />
    <Route path="/boards/:boardId" component={SecondaryNavBarContainer} />
    <ScrollingComponent
      className="content-area"
      verticalStrength={vStrength}
      horizontalStrength={hStrength} >
      <Switch>
        <AuthRoute exact path="/" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <ProtectedRoute exact path="/boards" component={BoardIndexContainer} />
        <ProtectedRoute path="/boards/:boardId" component={ListIndexContainer} />
      </Switch>
    </ScrollingComponent>
  </div>
);

export default DragDropContext(HTML5Backend)(App);
