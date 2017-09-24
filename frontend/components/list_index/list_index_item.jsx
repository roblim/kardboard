import React from 'react';
import CardIndexContainer from './card_index_container';

const ListIndexItem = (props) => {
  return(
    <div className="list-index-item">
      <div className="list-index-item-title">
        {props.list.title}
      </div>
      <div className="card-index-container">
        <CardIndexContainer listId={props.list.id} />
      </div>
    </div>
  )
}

export default ListIndexItem;
