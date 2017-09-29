import React from 'react';
import CardIndexContainer from '../card_index/card_index_container';
import CardFormContainer from '../card_index/card_form_container';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

const ItemTypes = {
  CARD: 'card'
};

const listTarget = {
  drop(props, monitor) {
    const cardId = monitor.getItem().cardId;
    const listId = props.list.id;
    props.updateCard( { id: cardId, list_id: listId } );
  }
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
};

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      addCardActive: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState( { addCardActive: true } );
  }

  addCard() {
    if (!this.state.addCardActive) {
      return(
        <div className="new-card-tile" onClick={this.handleClick}>
          <div className="new-card-tile-text">
            Add a card...
          </div>
        </div>
      )
    } else {
      return(
        <CardFormContainer listId={this.props.list.id} that={this}/>
      )
    }
  }

  render() {
    const { connectDropTarget, isOver } = this.props;

    return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
      <div className="list-index-item">

        <div className="list-index-item-title">
          {this.props.list.title}
        </div>

        <div className="card-index-container">
          <CardIndexContainer list={this.props.list} />
        </div>

        {this.addCard()}

        {isOver &&
          <div style={{
              position: 'absolute',
              borderRadius: '5px',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              zIndex: 1,
              opacity: 0.5,
              backgroundColor: 'lightblue',
            }} />
          }
        </div>
      </div>
    )
  }
}

ListIndexItem.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.CARD, listTarget, collect)(ListIndexItem);
