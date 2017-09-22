import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import BoardIndexItem from './board_index_item';
import BoardFormContainer from './board_form_container';
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

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoards(this.props.userId);
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
    if (!this.props.boards) { return null; }
    return(
      <div className="board-index-container">
        <h1>Private Boards</h1>
        <div className="board-index-box">
          {this.props.boards.map((board, idx) => (
            <BoardIndexItem board={board} key={`board-${idx}`} />
            )
          )}
          <Link to="/boards/new" onClick={this.openModal}>
            <div className="new-board-tile">
              <div className="new-board-tile-text">
                Create new board...
              </div>
            </div>
          </Link>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Create Board"
        >
          <BoardFormContainer that={this}/>
        </Modal>
      </div>
    );
  }
}

export default withRouter(BoardIndex);
