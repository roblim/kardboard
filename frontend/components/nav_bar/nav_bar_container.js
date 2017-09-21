import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut())
});

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

export default NavBarContainer;
