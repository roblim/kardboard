import { connect } from 'react-redux';
import { fetchCard } from '../../actions/card_actions';
import CardDetail from './card_detail';

const mapStateToProps = (state, ownProps) => ({
  card: ownProps.card,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCard: (cardId) => dispatch(fetchCard(cardId))
});

const CardDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardDetail);

export default CardDetailContainer;
