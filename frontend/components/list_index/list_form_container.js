import { connect } from 'react-redux';
import { createList } from '../../actions/list_actions';
import ListForm from './list_form';

const mapStateToProps = (state, ownProps) => ({
  boardId: ownProps.boardId,
  that: ownProps.that
});

const mapDispatchToProps = (dispatch) => {
  return{
    createList: (list) => dispatch(createList(list))
  };
};

const ListFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListForm);

export default ListFormContainer;
