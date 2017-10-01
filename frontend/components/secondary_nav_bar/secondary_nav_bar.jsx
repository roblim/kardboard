import React from 'react';
import { withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import ShareMenuContainer from './share_menu_container';

class SecondaryNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shareMenuOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    const boardId = this.props.match.params.boardId;
    this.props.fetchBoard(boardId);
  }

  toggleMenu() {
    this.state.shareMenuOpen ?
      this.setState( { shareMenuOpen: false }) :
      this.setState( { shareMenuOpen: true });
  }

  shareMenu() {
    if (this.state.shareMenuOpen) {
      return(
        <ShareMenuContainer that={this} board={this.props.board} outsideClickIgnoreClass="share-board-container"/>
      )
    }
  }

  render() {
    if (!this.props.board) { return null; }
    return(
      <div className="secondary-nav-bar-container">
        <h1 className="secondary-nav-bar-title">{this.props.board.title}</h1>
        <div className="share-board-container">
          <button type="button" onClick={this.toggleMenu}>
            Share Board
          </button>
          {this.shareMenu()}
        </div>
      </div>
    )
  }
}

export default SecondaryNavBar;
