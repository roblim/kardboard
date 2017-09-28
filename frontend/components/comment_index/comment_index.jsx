import React from 'react'
import { withRouter } from 'react-router-dom';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchComments(this.props.cardId);
    this.props.fetchAuthors(this.props.cardId);
  }

  render() {
    if (!this.props.comments) { return null; }

    return(
      <div className="comment-index-container">
        <div className="comment-index-box">
          {this.props.comments.map((comment, idx) => (
            <CommentIndexItem comment={comment}
                              key={`comment-${idx}`}
                              author={this.props.authors[comment.authorId]} />
          )
        )}
        </div>
      </div>
    )
  }
}

export default withRouter(CommentIndex);
