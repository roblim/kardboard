import { connect } from 'react-redux';
import { searchUsers } from '../../actions/user_actions';
import UserSearch from './user_search';
import { selectSearchResults } from '../../reducers/selectors';
import { createBoardShare } from '../../actions/board_share_actions';

const mapStateToProps = (state) => ({
  userSearchResults: [
    {
      title: "Select to share...",
      suggestions: selectSearchResults(state)
    }
  ]
});

const mapDispatchToProps = (dispatch) => ({
  searchUsers: (query) => dispatch(searchUsers(query)),
  clearSearch: () => dispatch({
    type: 'RECEIVE_USER_SEARCH_RESULTS',
    userSearchResults: {}
  }),
  createBoardShare: (boardId, collaboratorId) =>
    dispatch(createBoardShare(boardId, collaboratorId))
});

const UserSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSearch);

export default UserSearchContainer;
