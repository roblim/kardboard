import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.backButton = this.backButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push('/')
  }

  boardsButton() {
    if (this.props.currentUser) {
      return(
        <button className="boards-button" onClick={this.handleClick}>
          Boards
        </button>
      );
    }
  }

  logOutButton() {
    if (this.props.currentUser) {
      return(
        <button className="logout-button" onClick={this.props.logOut}>
          Log Out
        </button>
      );
    }
  }

  backButton() {
    if (this.props.match.params.boardId) {
      return(
        <button className="back-button" onClick={this.props.history.push('/boards')}>
          Back
        </button>
      )
    }
  }

  render() {
    return(
      <div className="nav-bar-container">
        <div className="boards-button-box">
          {this.backButton()}
          <div className="boards-button">{this.boardsButton()}</div>
        </div>
        <Link to="/"><h1 className='site-title'>Kardboard</h1></Link>
        <div className="log-out-button">{this.logOutButton()}</div>
      </div>
    );
  }

}

export default NavBar;
