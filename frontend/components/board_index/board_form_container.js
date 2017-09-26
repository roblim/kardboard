import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import BoardForm from './board_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  userId: state.session.currentUser.id,
  that: ownProps.that
});

const mapDispatchToProps = (dispatch) => {
  return {
    createBoard: (board, that) => dispatch(createBoard(board, that))
  };
};

const BoardFormContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardForm));

export default BoardFormContainer;
