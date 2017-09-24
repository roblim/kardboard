import React from 'react';
import { withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import ListIndexItem from './list_index_item'
import Modal from 'react-modal';

class ListIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchLists(this.props.board.id)
  }

  render() {
    if (!this.props.lists) { return null; }
    if (!this.props.board) { return null; }
    return(
      <div className="list-index-container">
        <h1>{this.props.board.title}</h1>
        <div className="list-index-box">
          {this.props.lists.map((list, idx) => (
            <ListIndexItem list={list} key={`list-${idx}`} />
            )
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(ListIndex);
