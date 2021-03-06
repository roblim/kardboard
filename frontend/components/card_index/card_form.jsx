import React from 'react';
import { withRouter } from 'react-router-dom';

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                   title: '',
                   list_id: this.props.listId
                 };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(field) {
    return (event) => (
      this.setState( { [field]: event.currentTarget.value })
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createCard(this.state);
    this.props.that.setState( { addCardActive: false } );
  }

  handleClick(event) {
    this.props.that.setState( { addCardActive: false } );
  }

  render() {
    return(
      <div className="card-form-container">
        <form className="card-form"
              onSubmit={this.handleSubmit}>
          <div className="card-form-input">
            <input type="text"
                   placeholder="Add a card..."
                   value={this.state.title}
                   onChange={this.handleChange('title')}
                   />
          </div>
          <div className="submit-actions-container">
            <div className="submit-button">
              <input type="submit" hidden />
              <button type="button" onClick={this.handleSubmit}>Add</button>
            </div>
            <div className="card-form-cancel" onClick={this.handleClick}>
              <i className="material-icons">clear</i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(CardForm);
