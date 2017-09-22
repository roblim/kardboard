import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import BoardForm from './board_form';

const mapStateToProps = (state) => ({
  userId: state.session.currentUser.id
});

const mapDispatchToProps = (dispatch) => {
  return {
    createBoard: (board) => dispatch(createBoard(board))
  };
};

const BoardFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardForm);

export default BoardFormContainer;
