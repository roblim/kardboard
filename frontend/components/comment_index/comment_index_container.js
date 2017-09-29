import { connect } from 'react-redux';
import { fetchComments, destroyComment } from '../../actions/comment_actions';
import { fetchAuthors } from '../../actions/user_actions';
import { selectComments, selectAuthors } from '../../reducers/selectors';
import CommentIndex from './comment_index';

const mapStateToProps = (state, ownProps) => ({
  cardId: parseInt(ownProps.cardId),
  commentsObject: state.entities.comments,
  comments: selectComments(state, parseInt(ownProps.cardId)),
  authors: state.entities.users
});

const mapDispatchToProps = (dispatch) => ({
  fetchComments: (cardId) => dispatch(fetchComments(cardId)),
  fetchAuthors: (cardId) => dispatch(fetchAuthors(cardId)),
  destroyComment: (comment) => dispatch(destroyComment(comment))
});

const CommentIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);

export default CommentIndexContainer;
