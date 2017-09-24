import React from 'react';

const ListIndexItem = (props) => {
  return(
    <div className="list-index-item">
      {props.list.title}
    </div>
  )
}

export default ListIndexItem;
