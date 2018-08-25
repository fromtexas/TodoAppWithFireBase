import React from "react";
import { connect } from "react-redux";
import * as actions from "actions";

export class TodoSearch extends React.Component {
  handleSearch() {
    var serchText = this.refs.searchText.value;
    this.props.dispatch(actions.setSearchText(serchText.toLowerCase()));
  }

  handleToggleShowCompeleted() {
    this.props.dispatch(actions.toggleShowCompleted());
  }

  render() {
    var { searchText, showCompleted } = this.props;
    return (
      <div className="todo-search">
        <div>
          <input
            value={searchText}
            onChange={this.handleSearch.bind(this)}
            placeholder="Search todos"
            type="search"
            ref="searchText"
          />
        </div>
        <div>
          <label>
            <input
              value={showCompleted}
              onChange={this.handleToggleShowCompeleted.bind(this)}
              ref="showCompleted"
              type="checkbox"
            />
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return {
    searchText: state.searchText,
    showCompleted: state.showCompleted
  };
})(TodoSearch);
