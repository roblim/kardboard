import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import BoardIndexContainer from './board_index/board_index_container';
import ListIndexContainer from './list_index/list_index_container';
import SecondaryNavBarContainer from './secondary_nav_bar/secondary_nav_bar_container'

const App = () => (
  <div className="app-container">
    <NavBarContainer />
    <Route path="/boards/:boardId" component={SecondaryNavBarContainer} />
    <div className="content-area">
    <Switch>
      <AuthRoute exact path="/" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute exact path="/boards" component={BoardIndexContainer} />
      <ProtectedRoute path="/boards/:boardId" component={ListIndexContainer} />
    </Switch>
    </div>
  </div>
);

export default App;
