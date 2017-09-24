import React from 'react';

const ListIndexItem = (props) => {
  return(
    <div className="list-index-item">
      <div className="list-index-item-title">
        {props.list.title}
      </div>
    </div>
  )
}

export default ListIndexItem;
