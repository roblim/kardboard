import React from 'react';
import { withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

class SecondaryNavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="secondary-nav-bar-container">
        <h1 className="secondary-nav-bar-title">{this.props.board.title}</h1>
      </div>
    )
  }
}

export default SecondaryNavBar;
