import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import CardDetailContainer from '../card_detail/card_detail_container';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
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
    return(
      <div className="card-index-item" onClick={this.openModal}>
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

export default CardIndexItem;
