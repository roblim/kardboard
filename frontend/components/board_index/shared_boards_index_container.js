import { connect } from 'react-redux';
import { fetchSharedBoards } from '../../actions/board_share_actions';
import SharedBoardsIndex from './shared_boards_index';

const mapStateToProps = (state) => ({
  userId: state.session.currentUser.id,
  sharedBoards: Object.values(state.entities.sharedBoards)
});

const mapDispatchToProps = (dispatch) => ({
  fetchSharedBoards: (userId) => dispatch(fetchSharedBoards(userId))
});

const SharedBoardsIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SharedBoardsIndex);

export default SharedBoardsIndexContainer;
