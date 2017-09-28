import { connect } from 'react-redux';
import { fetchCard, updateCard } from '../../actions/card_actions';
import CardDetail from './card_detail';

const mapStateToProps = (state, ownProps) => ({
  card: ownProps.card
});

const mapDispatchToProps = (dispatch) => ({
  fetchCard: (cardId) => dispatch(fetchCard(cardId)),
  updateCard: (card) => dispatch(updateCard(card)),
});

const CardDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardDetail);

export default CardDetailContainer;
