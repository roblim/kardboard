import React from 'react';
import { withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import ListIndexItem from './list_index_item';
import ListFormContainer from './list_form_container'
import SecondaryNavBarContainer from '../secondary_nav_bar/secondary_nav_bar_container'

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

  sortByOrd(list1, list2) {
    if (list1.ord < list2.ord) {
      return -1;
    } else if (list1.ord > list2.ord) {
      return 1;
    } else {
      return 0;
    }
  }

  render() {
    if (!this.props.lists) { return null; }
    return(
      <div className="list-index-container">
        <div className="list-index-box">
          {this.props.lists.sort(this.sortByOrd).map((list, idx) => (
            <ListIndexItem list={list}
                           key={`list-${idx}`}
                           updateCard={this.props.updateCard}/>
            )
          )}
          {this.addList()}
        </div>
      </div>
    )
  }
}

export default withRouter(ListIndex);
