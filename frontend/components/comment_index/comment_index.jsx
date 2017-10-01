import React from 'react'
import { withRouter } from 'react-router-dom';
import CommentIndexItem from './comment_index_item';
import CommentFormContainer from './comment_form_container';
import CommentForm from './comment_form';
import {selectComments} from '../../reducers/selectors';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchComments(this.props.cardId);
    this.props.fetchAuthors(this.props.cardId);
  }

  render() {
    if (!this.props.comments) { return <div></div>; };
    if (!this.props.authors) { return <div></div>; };
    const comments = selectComments(this.props.comments, this.props.cardId);

    return(
      <div className="comment-index-container">
        <CommentForm
          cardId={this.props.cardId}
          createComment={this.props.createComment}
          currentUser={this.props.currentUser}
          fetchAuthors={this.props.fetchAuthors}
          />
        <div className="comment-index-box">
          {comments.map((comment, idx) => (
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
