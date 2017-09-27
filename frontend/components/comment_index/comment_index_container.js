import { connect } from 'react-redux';
import { fetchComments, destroyComment } from '../../actions/comment_actions';
import { selectCards } from '../../reducers/selectors';
import CommentIndex from './comment_index';

const mapStateToProps = (state, ownProps) => ({
  cardId: parseInt(ownProps.cardId),
  comments: selectComments(state, parseInt(ownProps.cardId))
});

const mapDispatchToProps = (dispatch) => ({
  fetchComments: (cardId) => dispatch(fetchComments(cardId))
});

const CommentIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);

export default CommentIndexContainer;
