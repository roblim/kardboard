import React from 'react';
import onClickOutside from 'react-onclickoutside';

class CommentDeleteMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClick() {
    this.props.destroyComment(this.props.comment);
    this.props.that.setState( { menuOpen: false } );
  }

  handleClickOutside() {
    this.props.that.setState( { menuOpen: false } );
  }

  render() {
    return(
      <div className="comment-delete-menu">
        <div className="comment-delete-menu-heading-box">

          <div className="close-icon-left">
            <i className="material-icons">clear</i>
          </div>

          <div className="comment-delete-menu-title">
            Delete Comment?
          </div>

          <div className="close-icon" onClick={this.handleClickOutside}>
            <i className="material-icons">clear</i>
          </div>

        </div>
        <div className="comment-delete-menu-body">
          Deleting a comment is forever. There is no undo.
        </div>
        <button className="delete-comment-button" onClick={this.handleClick}>
          Delete Comment
        </button>

      </div>
    )
  }
}

export default onClickOutside(CommentDeleteMenu);
