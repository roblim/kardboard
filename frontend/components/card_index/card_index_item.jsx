import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import CardDetailContainer from '../card_detail/card_detail_container';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

const customStyles = {
  content : {
    position                   : 'absolute',
    top                        : '40px',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',
    // marginRight                : '-50%',
    // transform                  : 'translate(-50%, -50%)',
    margin: 'auto',
    width: '570px',
    height: 'auto',
    background: 'rgb(237, 237, 240)'


  }
};

export const ItemTypes = {
  CARD: 'card'
};

const cardSource = {
  beginDrag(props) {
    return { cardId: props.card.id };
  }
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
};

class CardIndexItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { connectDragSource, isDragging } = this.props
    return connectDragSource(
      <div className="card-index-item"
           onClick={this.openModal}
           style={{
             opacity: isDragging ? 0.5 : 1
           }}>
        {this.props.card.title}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Card Detail"
          >
          <CardDetailContainer card={this.props.card} list={this.props.list} that={this}/>
        </Modal>
      </div>

    )
  }
};

CardIndexItem.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.CARD, cardSource, collect)(CardIndexItem);
