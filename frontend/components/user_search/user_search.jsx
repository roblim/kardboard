import React from 'react';
import Autosuggest from 'react-autosuggest';

class UserSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      suggestions: this.props.userSearchResults
    };

    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
  }

  getSuggestions(value) {

  }

  getSuggestionValue(suggestion) {
    return '';
  }

  renderSuggestion(suggestion) {
    const email = suggestion.email;
    const truncatedEmail = email.slice(0, 9)
    return(
      <div>
        <span className="search-result-name">
          {`${suggestion.name} `}
        </span>
        <span className="search-result-email">
          {`(${truncatedEmail}...)`}
        </span>
      </div>
    );
  }

  onSuggestionsFetchRequested({ value }) {
    this.props.searchUsers(value);
  }

  onSuggestionsClearRequested() {
    this.props.clearSearch();
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
  }

  getSectionSuggestions(section) {
    return section.suggestions;
  }

  renderSectionTitle(section) {
    return(
      <div className="suggestion-section-title">{section.title}</div>
    )
  }

  onSuggestionSelected(event, { suggestion,
                                suggestionValue,
                                suggestionIndex,
                                sectionIndex,
                                method
                              }) {
    this.props.createBoardShare(this.props.boardId, suggestion.id);
  }

  render() {
    const inputProps = {
      placeholder: 'Share board...',
      value: this.state.value,
      onChange: this.onChange
    };

    return(
      <Autosuggest
        suggestions={this.props.userSearchResults}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        highlightFirstSuggestion={true}
        multiSection={true}
        renderSectionTitle={this.renderSectionTitle}
        getSectionSuggestions={this.getSectionSuggestions}
        onSuggestionSelected={this.onSuggestionSelected}
        />
    );
  }
}

export default UserSearch;
