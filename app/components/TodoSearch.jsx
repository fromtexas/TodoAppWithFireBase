var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoSearch = React.createClass({
  handleSearch: function () {
    var serchText = this.refs.searchText.value;
    this.props.dispatch(actions.setSearchText(serchText.toLowerCase()));
  },
  handleToggleShowCompeleted: function(){
    this.props.dispatch(actions.toggleShowCompleted());
  },
  render: function(){
    var {searchText, showCompleted} = this.props;
    return (
      <div className='todo-search'>
        <div>
          <input value={searchText} onChange={this.handleSearch} placeholder='Search todos' type='search' ref='searchText'/>
        </div>
        <div>
          <label>
            <input value={showCompleted} onChange={this.handleToggleShowCompeleted} ref='showCompleted' type='checkbox'/>
            Show completed todos
          </label>
        </div>
      </div>
    )
  }
});

export default connect((state) => {
  return {
    searchText: state.searchText,
    showCompleted: state.showCompleted
  }
})(TodoSearch);
