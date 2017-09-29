import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                   author_id: this.props.currentUser.id,
                   card_id: this.props.cardId,
                   body: ''
                 };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  handleChange(event) {
    this.setState( { body: event.currentTarget.value })
  };

  handleClick(event) {
    this.props.createComment(this.state);
    this.setState( { body: '' } );
    this.props.that.setState( { toggle: !this.props.that.state.toggle } );
  };

  createAvatar() {
    const authorName = this.props.currentUser.name.split(' ');
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
      <div className="comment-form-container">
        <div className="comment-form-box">
          {this.createAvatar()}
          <div className="comment-form">
            <textarea className="comment-form-body-input"
                      placeholder="Write a comment..."
                      onChange={this.handleChange}
                      value={this.state.body}
              />
            <div className="save-comment-button-box">
              <button type="button"
                      onClick={this.handleClick}
                      className="save-comment-button"
                      >
                      Save
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default CommentForm;
