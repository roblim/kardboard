import React from 'react';
import { withRouter } from 'react-router-dom';
import DatePicker from 'react-toolbox/lib/date_picker';
import CommentIndexContainer from '../comment_index/comment_index_container';

class CardDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      description: this.props.card.description,
      _description: null,
      editing: null,
      dueDate: this.loadDate(this.props.card.dueDate)
    }

    this.toggleEditing = this.toggleEditing.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  loadDate(date) {
    if (date) {
      return new Date(date);
    } else {
      return null;
    }
  }

  toggleEditing(cardId) {
    return () => {
      this.setState( { editing: cardId } );
    }
  }

  handleInput(event) {
    this.setState( { _description: event.currentTarget.innerText })
  }

  handleChange(event) {
    this.setState( { _description: event.currentTarget.value })
  }

  handleUpdate() {
    this.props.updateCard({
      id: this.props.card.id,
      description: this.state._description
    })
    this.state.description = this.state._description;
    this.state.editing = null;
  }

  handleDateChange(value) {
    this.props.updateCard({
      id: this.props.card.id,
      due_date: value.toJSON()
    });
    this.setState( { dueDate: value } );
  }

  renderItemOrEditField(card) {
    if (this.state.description) {
      return(
        <div
          contentEditable="true"
          onClick={ this.toggleEditing(card.id) }
          className="card-detail-description-body"
          onInput={this.handleInput}
          suppressContentEditableWarning={true}
          >
          { card.description }
        </div>
      )
    } else {
      return(
        <div className="card-detail-description-entry">
          <textarea className="desc-create"
                    placeholder="Add a more detailed description..."
                    onChange={this.handleChange}></textarea>
          <button type="button" onClick={this.handleUpdate}>
            Save
          </button>
        </div>
      )
    }
  }

  descriptionUpdateButton () {
    if (this.state.editing) {
      return <button type="button" onClick={this.handleUpdate}>Update</button>
    }
  }

  dueDate() {
      return(
        <DatePicker label="Due Date"
                    sundayFirstDayOfWeek
                    onChange={this.handleDateChange}
                    value={this.state.dueDate}
                    />
      )
  }

  render() {
    return(
      <div className="card-detail-container">
        <div className="card-detail-box">

          <div className="card-detail-title">
            <h2>{this.props.card.title}</h2>
            <p>in list {this.props.list.title}</p>
          </div>

          {this.dueDate()}

          <div className="card-detail-description-box">
            <h4>Description</h4>
            {this.renderItemOrEditField(this.props.card)}
            {this.descriptionUpdateButton()}
          </div>

          <CommentIndexContainer cardId={this.props.card.id} />

        </div>
      </div>
    )
  }
}

export default CardDetail;
