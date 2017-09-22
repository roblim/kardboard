import React from 'react';
import { Link } from 'react-router-dom';

const BoardIndexItem = (props) => {
  return(
    <Link to={`/boards/${props.board.id}`}>
      <div className="board-tile">
        {props.board.title}
      </div>
    </Link>
  );
};

export default BoardIndexItem;
