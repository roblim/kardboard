import { connect } from 'react-redux';
import { fetchLists } from '../../actions/list_actions';
import { selectLists } from '../../reducers/selectors';
import ListIndex from './list_index';

const mapStateToProps = (state, ownProps) => ({
  board: state.entities.boards[ownProps.match.params.boardId],
  lists: selectLists(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchLists: (boardId) => dispatch(fetchLists(boardId))
})

const ListIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListIndex);

export default ListIndexContainer;
