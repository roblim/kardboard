import React from 'react';
import CardIndexContainer from '../card_index/card_index_container';
import CardFormContainer from '../card_index/card_form_container';
import Modal from 'react-modal';

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

class ListIndexItem extends React.Component {
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
      <div className="list-index-item">

        <div className="list-index-item-title">
          {this.props.list.title}
        </div>

        <div className="card-index-container">
          <CardIndexContainer listId={this.props.list.id} />
        </div>

        <div className="new-card-tile" onClick={this.openModal}>
          <div className="new-card-tile-text">
            Add a card...
          </div>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Add Card"
        >
          <CardFormContainer listId={this.props.list.id} that={this}/>
        </Modal>
      </div>
    )
  }
}

export default ListIndexItem;
