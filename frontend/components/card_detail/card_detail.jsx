import React from 'react';
import { withRouter } from 'react-router-dom';
import ContentEditable from 'react-contenteditable';

class CardDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      description: this.props.card.description,
      editing: null
    }

    this.toggleEditing = this.toggleEditing.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  toggleEditing(cardId) {
    return () => {
      this.setState( { editing: cardId } );
    }
  }

  handleInput(event) {
    this.setState( { description: event.currentTarget.innerText })
  }

  handleUpdate() {
    this.props.updateCard({
      id: this.props.card.id,
      description: this.state.description
    })
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
        null

      )
    }
  }

  descriptionUpdateButton () {
    if (this.state.editing) {
      return <button type="button" onClick={this.handleUpdate}>Update</button>
    }
  }

  render() {
    return(
      <div className="card-detail-container">
        <div className="card-detail-box">

          <div className="card-detail-header">
            <div className="card-detail-title">
              <h1>{this.props.card.title}</h1>
              <p>in list {this.props.list.title}</p>
            </div>
            <div className="card-detail-due-date">
              <span className="due-date-field-name">
                Due:&nbsp;
              </span>
              <span className="due-date">
                {this.props.card.dueDate}
              </span>
            </div>
          </div>

          <div className="card-detail-description-box">
            {this.renderItemOrEditField(this.props.card)}
            {this.descriptionUpdateButton()}
          </div>

        </div>
      </div>
    )
  }
}

export default CardDetail;
