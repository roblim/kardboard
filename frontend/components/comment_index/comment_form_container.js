import { connect } from 'react-redux';
import { createComment, fetchComments } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  cardId: ownProps.cardId,
  that: ownProps.that
});

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment)),
  fetchComments: (cardId) => dispatch(fetchComments(cardId))
});

const CommentFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);

export default CommentFormContainer;
