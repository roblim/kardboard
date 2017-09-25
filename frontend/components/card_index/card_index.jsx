import React from 'react';
import { withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import CardIndexItem from './card_index_item';
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

class CardIndex extends React.Component {
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

  componentDidMount() {
    this.props.fetchCards(this.props.listId);
  }

  render() {
    if (!this.props.cards) { return null; }

    return(
      <div className="card-index-container">
        <div className="card-index-box">
          {this.props.cards.map((card, idx) => (
            <CardIndexItem card={card} key={`card-${idx}`} />
            )
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(CardIndex);
