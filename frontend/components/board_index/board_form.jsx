import React from 'react';
import { withRouter } from 'react-router-dom';

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', user_id: this.props.userId };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (event) => (
      this.setState({ [field]: event.currentTarget.value })
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createBoard(this.state);
    this.props.history.push('/boards');
    this.props.that.closeModal();
  }

  render() {
    return(
      <div className="board-form-container">
        <form className="board-form"
              onSubmit={this.handleSubmit}>
          <div className="board-form-input">
            <input type="text"
                   placeholder="Add board title"
                   value={this.state.title}
                   onChange={this.handleChange('title')}
                   />
          </div>
          <div className="submit-button">
            <input type="submit" value="Create Board" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(BoardForm);
