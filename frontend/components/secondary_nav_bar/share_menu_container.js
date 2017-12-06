import { connect } from 'react-redux';
import ShareMenu from './share_menu';
import { fetchCollaborators, destroyBoardShare } from '../../actions/board_share_actions';
import { selectCollaborators } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => ({
  board: ownProps.board,
  collaborators: selectCollaborators(state, ownProps.board.id)
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollaborators: (boardId) => dispatch(fetchCollaborators(boardId)),
  destroyBoardShare: (boardId, collaboratorId) =>
    dispatch(destroyBoardShare(boardId, collaboratorId))
});

const ShareMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShareMenu);

export default ShareMenuContainer;
