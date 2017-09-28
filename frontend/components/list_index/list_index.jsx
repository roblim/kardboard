import React from 'react';
import { withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import ListIndexItem from './list_index_item';
import ListFormContainer from './list_form_container'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class ListIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      addListActive: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState( { addListActive: true } );
  }

  componentDidMount() {
    this.props.fetchLists(this.props.boardId)
  }

  addList() {
    if (!this.state.addListActive) {
      return(
        <div className="new-list-tile" onClick={this.handleClick}>
          <div className="new-list-tile-text">
            Add a list...
          </div>
        </div>
      )
    } else {
      return(
        <ListFormContainer boardId={this.props.boardId} that={this}/>
      )
    }
  }

  render() {
    if (!this.props.lists) { return null; }
    return(
      <div className="list-index-container">
        <div className="list-index-box">
          {this.props.lists.map((list, idx) => (
            <ListIndexItem list={list} key={`list-${idx}`} />
            )
          )}
          {this.addList()}
        </div>
      </div>
    )
  }
}

export default withRouter(ListIndex);
