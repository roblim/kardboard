import { connect } from 'react-redux';
import { createCard } from '../../actions/card_actions';
import CardForm from './card_form';

const mapStateToProps = (state, ownProps) => ({
  listId: ownProps.listId,
  that: ownProps.that
});

const mapDispatchToProps = (dispatch) => ({
  createCard: (card) => dispatch(createCard(card))
});

const CardFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardForm);

export default CardFormContainer;
