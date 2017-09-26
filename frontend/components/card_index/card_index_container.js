import { connect } from 'react-redux';
import { fetchCards, createCard } from '../../actions/card_actions';
import { selectCards } from '../../reducers/selectors';
import CardIndex from './card_index';

const mapStateToProps = (state, ownProps) => ({
  list: ownProps.list,
  cards: selectCards(state, ownProps.list.id)
});

const mapDispatchToProps = (dispatch) => ({
  fetchCards: (listId) => dispatch(fetchCards(listId)),
  createCard: (card) => dispatch(createCard(card))
});

const CardIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardIndex);

export default CardIndexContainer;
