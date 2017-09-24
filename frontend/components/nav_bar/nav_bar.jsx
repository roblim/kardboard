import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  boardsButton() {
    if (this.props.currentUser) {
      return(
        <button className="boards-button" onClick="">
          Boards
        </button>
      );
    }
  }

  logOutButton () {
    if (this.props.currentUser) {
      return(
        <button className="logout-button" onClick={this.props.logOut}>
          Log Out
        </button>
      );
    }
  }

  render() {
    return(
      <div className="nav-bar-container">
        <div className="boards-button">{this.boardsButton()}</div>
        <Link to="/"><h1 className='site-title'>KrdBrd</h1></Link>
        <div className="log-out-button">{this.logOutButton()}</div>
      </div>
    );
  }

}

export default NavBar;
