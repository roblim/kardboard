import React from 'react';
import { withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import UserSearchContainer from '../user_search/user_search_container';

class SecondaryNavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const boardId = this.props.match.params.boardId;
    this.props.fetchBoard(boardId);
  }

  render() {
    if (!this.props.board) { return null; }
    return(
      <div className="secondary-nav-bar-container">
        <h1 className="secondary-nav-bar-title">{this.props.board.title}</h1>
        <div className="user-search-wrapper">
          <UserSearchContainer />
        </div>
      </div>
    )
  }
}

export default SecondaryNavBar;
