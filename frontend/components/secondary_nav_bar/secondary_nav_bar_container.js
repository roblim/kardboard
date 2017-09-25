import { connect } from 'react-redux';
import SecondaryNavBar from './secondary_nav_bar';
import { fetchBoard } from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => ({
  board: state.entities.boards[ownProps.match.params.boardId],
});

const mapDispatchToProps = (dispatch) => ({
  fetchBoard: (boardId) => dispatch(fetchBoard(boardId))
});

const SecondaryNavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondaryNavBar);

export default SecondaryNavBarContainer;
