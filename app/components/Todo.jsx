var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var moment = require('moment');

export var Todo = React.createClass({
    toggleTodo: function () {
      var status = !this.props.completed;
      this.props.dispatch(actions.startToggleTodo(this.props.id, status))
    },
    render: function(){
        var {text, id, completed, createdAt, completedAt} = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        var renderDate = () => {
          var message = 'Created at: ';
          var someDate = createdAt;

          if(completed){
            message = 'Completed at: ';
            someDate = completedAt;
          }

          return message + moment.unix(someDate).format('MMMM Do, YYYY @ k:mm ');;
        };
        return (
            <div className={todoClassName}>
              <label>
                <input onChange={this.toggleTodo}  type='checkbox' checked={completed}/>
                  {text}
              </label>
                <p className='todo-date'>{renderDate()}</p>
            </div>
        )
    }
});
export default connect()(Todo);
// module.exports = connect()(Todo);
