import { connect } from 'react-redux';

import { logIn, logOut, signUp, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    sessionErrors: state.errors.session,
    signupErrors: state.errors.signup
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'signup') ? signUp : logIn;
  return {
    processForm: user => dispatch(processForm(user)),
    clearErrors: () => dispatch(clearErrors()),
    formType

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
