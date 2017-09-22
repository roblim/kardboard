import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import BoardForm from './board_form';

const mapDispatchToProps = (dispatch) => {
  return {
    createBoard: (board) => dispatch(createBoard(board))
  };
};

const BoardFormContainer = connect(
  null,
  mapDispatchToProps
)(BoardForm);

export default BoardFormContainer;
