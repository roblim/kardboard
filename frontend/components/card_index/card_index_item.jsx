import React from 'react';

const CardIndexItem = (props) => {
  return(
    <div className="card-index-item">
      {props.card.title}
    </div>
  )
};

export default CardIndexItem;
