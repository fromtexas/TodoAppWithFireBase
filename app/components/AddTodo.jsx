var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  onFormSubmit: function (e) {
    var todo = this.refs.todo.value;
    if(todo){
      //this.props.newTodo(todo);
      this.props.dispatch(actions.startAddTodo(todo));
      this.refs.todo.value = '';
    }else {
      this.refs.todo.focus();
    }
    e.preventDefault();
  },
  render: function () {
    return (
      <div className='add-todo'>
          <form onSubmit={this.onFormSubmit}>
            <input placeholder='Add somthing' type='text' ref='todo'/>
            <button className='button expanded'>Submit</button>
          </form>
      </div>
    )
  }
});

export default connect()(AddTodo);
