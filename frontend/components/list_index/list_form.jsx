import React from 'react';
import { withRouter } from 'react-router-dom';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', board_id: this.props.boardId };
    this.handleSubmit = this.handleSubmit.bind(this);
}

  handleChange(field) {
    return (event) => (
      this.setState( {[field]: event.currentTarget.value })
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createList(this.state);
    this.props.history.push(`/boards/${this.props.boardId}`);
    this.props.that.closeModal();
  }

  render() {
    return(
      <div className="list-form-container">
        <form className="list-form"
              onSubmit={this.handleSubmit}>
          <div className="list-form-input">
            <input type="text"
                   placeholder="Add a list..."
                   value={this.state.title}
                   onChange={this.handleChange('title')}
                   />
          </div>
          <div className="submit-button">
            <input type="submit" hidden />
            <button type="button" onClick={this.handleSubmit}>Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ListForm);
