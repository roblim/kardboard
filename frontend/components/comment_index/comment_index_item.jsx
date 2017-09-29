import React from 'react';
import CommentDeleteMenu from './comment_delete_menu';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    if (!this.state.menuOpen) {
      this.setState({ menuOpen: true })
    } else {
      this.setState({ menuOpen: false })
    }
  }

  createAvatar() {
    const authorName = this.props.author.name.split(' ');
    if (authorName.length === 1) {
      return(
        <div className="author-avatar">
          <h4 className="author-initials">{authorName[0][0].toUpperCase()}</h4>
        </div>
      )
    } else {
      const firstInitial = authorName[0][0].toUpperCase();
      const lastInitial = authorName.slice(-1)[0][0].toUpperCase();
      return(
        <div className="author-avatar">
          <h4 className="author-initials">{firstInitial + lastInitial}</h4>
        </div>
      )
    }
  };

  commentDeleteMenu() {
    if (this.state.menuOpen) {
      return(
        <CommentDeleteMenu
          that={this}
          outsideClickIgnoreClass="comment-delete"
          destroyComment={this.props.destroyComment}
          comment={this.props.comment}/>
      )
    }
  }

  render() {
    if (!this.props.author) { return null; }
    return(
      <div className="comment-index-item-container">
        {this.createAvatar()}
        <div className="comment-index-item-box">
          <div className="comment-index-item-author-name">
            <h4>{this.props.author.name}</h4>
          </div>
          <div className="comment-index-item-body">
            {this.props.comment.body}
          </div>
          <div className="comment-index-item-info">
            {this.props.comment.createdAt} -&nbsp;
            <span
              onClick={this.toggleMenu}
              className="comment-delete">Delete</span>
            <div className="comment-delete-confirmation">
              {this.commentDeleteMenu()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentIndexItem;
