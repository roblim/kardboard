import React from 'react';
import UserSearchContainer from '../user_search/user_search_container';

class ShareMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchCollaborators(this.props.board.id);
  }

  handleClick(event) {
    const boardId = this.props.board.id;
    const collaboratorId = parseInt(event.currentTarget.attributes.value.value);
    this.props.destroyBoardShare(boardId, collaboratorId);
  }

  collaborators() {
    if (this.props.collaborators.length > 0) {
      return <h4>Collaborators</h4>
    }
  }

  render() {
    return(
      <div className="share-menu-box">
        <UserSearchContainer that={this}
                             boardId={this.props.board.id}
                             />
        {this.collaborators()}
        <div className="share-menu-collaborators">
          {this.props.collaborators.map(
            (collab, idx) =>
            <div key={idx} className="collaborator-item">
              <div className="collaborator-name">{collab.name}</div>
              <div className="collaborator-delete" value={collab.id} onClick={this.handleClick}>
                <i className="material-icons">clear</i>
              </div>
            </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default ShareMenu;
