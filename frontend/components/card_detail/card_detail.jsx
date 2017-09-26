import React from 'react';
import { withRouter } from 'react-router-dom';

class CardDetail extends React.Component {
  constructor(props) {
    super(props)
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
              {this.props.card.dueDate}
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default CardDetail;
