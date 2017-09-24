import { connect } from 'react-redux';
import SecondaryNavBar from './secondary_nav_bar';

const mapStateToProps = (state, ownProps) => ({
  board: state.entities.boards[ownProps.match.params.boardId],
});

const mapDispatchToProps = (dispatch) => ({

});

const SecondaryNavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondaryNavBar);

export default SecondaryNavBarContainer;
