import React from 'react'
import { withRouter } from 'react-router-dom';
import CommentIndexItem from './comment_index_item';
import CommentFormContainer from './comment_form_container';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };
  }

  componentDidMount() {
    this.props.fetchComments(this.props.cardId);
    this.props.fetchAuthors(this.props.cardId);
  }

  render() {
    if (!this.props.comments) { return <div></div>; };
    if (!this.props.authors) { return <div></div>; };

    return(
      <div className="comment-index-container">
        <CommentFormContainer cardId={this.props.cardId} that={this}/>
        <div className="comment-index-box">
          {this.props.comments.map((comment, idx) => (
            <CommentIndexItem comment={comment}
                              key={`Comment-${idx}`}
                              author={this.props.authors[comment.authorId]}
                              destroyComment={this.props.destroyComment} />
          )
        )}
        </div>
      </div>
    );
  }
}

export default withRouter(CommentIndex);
