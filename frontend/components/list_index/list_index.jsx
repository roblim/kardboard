import React from 'react';
import { withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import ListIndexItem from './list_index_item';
import ListFormContainer from './list_form_container'
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

class ListIndex extends React.Component {
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

  componentWillMount() {
    this.props.fetchLists(this.props.board.id)
  }

  render() {
    if (!this.props.lists) { return null; }
    if (!this.props.board) { return null; }
    return(
      <div className="list-index-container">
        <div className="list-index-box">
          {this.props.lists.map((list, idx) => (
            <ListIndexItem list={list} key={`list-${idx}`} />
            )
          )}
            <div className="new-list-tile" onClick={this.openModal}>
              <div className="new-list-tile-text">
                Add a list...
              </div>
            </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Create List"
        >
          <ListFormContainer boardId={this.props.board.id} that={this}/>
        </Modal>
      </div>
    )
  }
}

export default withRouter(ListIndex);
