import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  cardId: ownProps.cardId
});

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment))
});

const CommentFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);

export default CommentFormContainer;
