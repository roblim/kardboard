import { connect } from 'react-redux';
import { fetchBoards } from '../../actions/board_actions';
import BoardIndex from './board_index';
import { selectBoards } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    boards: selectBoards(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBoards: () => dispatch(fetchBoards())
  };
};

const BoardIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardIndex);

export default BoardIndexContainer;
