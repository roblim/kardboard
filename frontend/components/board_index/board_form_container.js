import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import BoardForm from './board_form';

const mapStateToProps = (state, ownProps) => ({
  userId: state.session.currentUser.id,
  that: ownProps.that
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
