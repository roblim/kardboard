import React from 'react';
import { Link } from 'react-router-dom';

const BoardIndexItem = (props) => {
  const boardId = props.board.id;
  return(
    <Link to={`/boards/${boardId}`}>
      <div className="board-tile">
        <div className="board-tile-text">{props.board.title}</div>
      </div>
    </Link>
  );
};

export default BoardIndexItem;
