import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import SharedBoardsIndexItem from './board_index_item';

class SharedBoardsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSharedBoards(this.props.userId);
  }

  sharedBoards() {
    if (this.props.sharedBoards.length > 0) {
      return <h1 className="board-index-title">Shared Boards</h1>
    }
  }

  render() {
    if (!this.props.sharedBoards) { return null; }
    return(
      <div className="board-index-container">
        {this.sharedBoards()}
        <div className="board-index-box">
          {this.props.sharedBoards.map((board, idx) => (
            <SharedBoardsIndexItem board={board} key={`shared-board-${idx}`} />
            )
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(SharedBoardsIndex);
