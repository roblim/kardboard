import { connect } from 'react-redux';
import { searchUsers } from '../../actions/user_actions';
import UserSearch from './user_search';
import { selectSearchResults } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  userSearchResults: selectSearchResults(state)
});

const mapDispatchToProps = (dispatch) => ({
  searchUsers: (query) => dispatch(searchUsers(query)),
  clearSearch: () => dispatch({
    type: 'RECEIVE_USER_SEARCH_RESULTS',
    userSearchResults: {}
  })
});

const UserSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSearch);

export default UserSearchContainer;
