import React from 'react';
import { withRouter } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', owner_id: this.props.userId };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleChange(field) {
    return (event) => (
      this.setState({ [field]: event.currentTarget.value })
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createBoard(this.state, this);
  }

  handleClickOutside(event) {
    this.props.that.setState( {addBoardActive: false } );
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
            <input type="submit" hidden />
            <button type="button" onClick={this.handleSubmit}>Create Board</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(onClickOutside(BoardForm));
