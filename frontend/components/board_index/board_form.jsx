import React from 'react';

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', user_id: this.props.userId };
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(field) {
    return (event) => (
      this.setState({ [field]: event.currentTarget.value })
    );
  }

  handleClick(event) {
    this.props.createBoard(this.state);
  }

  render() {
    return(
      <div className="board-form-container">
        <form className="board-form">
          <input type="text"
                 placeholder="Add board title"
                 value={this.state.title}
                 onChange={this.handleChange}
                 />
        </form>
        <button onClick={this.handleClick}>Create Board</button>
      </div>
    );
  }
}
