import { connect } from 'react-redux';
import { fetchLists } from '../../actions/list_actions';
import { selectLists } from '../../reducers/selectors';
import ListIndex from './list_index';
import { updateCard } from '../../actions/card_actions';

const mapStateToProps = (state, ownProps) => ({
  boardId: parseInt(ownProps.match.params.boardId),
  lists: selectLists(state, parseInt(ownProps.match.params.boardId))
});

const mapDispatchToProps = (dispatch) => ({
  fetchLists: (boardId) => dispatch(fetchLists(boardId)),
  updateCard: (card) => dispatch(updateCard(card))
});

const ListIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListIndex);

export default ListIndexContainer;
