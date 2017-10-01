import { connect } from 'react-redux';
import { destroyComment,
         createComment,
         fetchComments } from '../../actions/comment_actions';
import { fetchAuthors } from '../../actions/user_actions';
import { selectComments, selectAuthors } from '../../reducers/selectors';
import CommentIndex from './comment_index';

const mapStateToProps = (state, ownProps) => ({
  cardId: parseInt(ownProps.cardId),
  currentUser: state.session.currentUser,
  comments: state.entities.comments,
  authors: state.entities.users
});

const mapDispatchToProps = (dispatch) => ({
  fetchComments: (cardId) => dispatch(fetchComments(cardId)),
  fetchAuthors: (cardId) => dispatch(fetchAuthors(cardId)),
  destroyComment: (comment) => dispatch(destroyComment(comment)),
  createComment: (comment) => dispatch(createComment(comment))
});

const CommentIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);

export default CommentIndexContainer;
