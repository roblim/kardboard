import React from 'react';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props)
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

  render() {
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
            {this.props.comment.createdAt}
          </div>
        </div>
      </div>
    )
  }
}

export default CommentIndexItem;
