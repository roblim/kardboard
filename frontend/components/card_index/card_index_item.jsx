import React from 'react';
import { Link } from 'react-router-dom';

const CardIndexItem = (props) => {
  return(
    <div className="card-index-item">
      {props.card.title}
    </div>
  )
};

export default CardIndexItem;
