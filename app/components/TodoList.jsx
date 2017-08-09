var React = require('react');
var {connect} = require('react-redux');
var TodoAPI = require('TodoAPI');
import Todo from 'Todo'


export var TodoList = React.createClass({
    render: function(){
        var {todos, searchText, showCompleted} = this.props;
        var renderTodos = () => {
          var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
          if(filterTodos.length === 0){
            return (<p className='message text-center'>Nothing to do</p>)
          }
            return filterTodos.map((todo) => {
                return (
                <Todo key={todo.id} {...todo}/>
                )
            })
        };
        return (
            <div className='todo-list'>
              {renderTodos()}
            </div>
        )
    }
});

export default connect((state) => {
  return {
    todos: state.todos,
    showCompleted: state.showCompleted,
    searchText: state.searchText
  }
})(TodoList);
// module.exports = connect((state) => {
//   return {
//     todos: state.todos
//   }
// })(TodoList);
