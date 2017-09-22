import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BoardIndexItem from './board_index_item';

class BoardIndex extends React.component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBoards();
  }

  render() {
    if (!this.props.boards) { return null; }
    return(
      <div className="board-index-container">
        {this.props.boards.map((board, idx) => (
          <BoardIndexItem board={board} key={`board-${idx}`} />
          )
        )}
        <Link to="/boards/new">
          <div className="new-board-tile">
            Create new board...
          </div>
        </Link>
      </div>
    );
  }
}

export default withRouter(BoardIndex);
