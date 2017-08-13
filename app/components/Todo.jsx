

import React from 'react'
import {connect} from 'react-redux'
import * as actions from 'actions'
import moment from 'moment'
import EditTodo from 'EditTodo'
import EditRemoveTodo from 'EditRemoveTodo'


export class Todo extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      edit: false
    }
  }

  toggleTodo () {
    var status = !this.props.completed;
    this.props.dispatch(actions.startToggleTodo(this.props.id, status))
  }

  changeEditStatus() {
    var currentStatus = this.state.edit;
    this.setState({
      edit: !currentStatus
    })
  }


  render () {
    var editStatus = this.state.edit;
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
    var renderEditComp = () => {
      if(editStatus){
      return  <EditTodo changeEditStatus={this.changeEditStatus.bind(this)} {...this.props} />
      }else{
        return (
          <div className='edit-todo-form'>
            <label>
              <input onChange={this.toggleTodo.bind(this)}  type='checkbox' checked={completed}/>
                {text}
            </label>
              <p className='todo-date'>{renderDate()}</p>
          </div>
        )
      }
    }
    return (
        <div className={todoClassName}>
          <EditRemoveTodo changeEditStatus={this.changeEditStatus.bind(this)} id={this.props.id} />
          {renderEditComp()}
        </div>
    )
  }

}

export default connect()(Todo);
