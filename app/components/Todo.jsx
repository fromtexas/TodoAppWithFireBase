

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
    const status = !this.props.completed;
    this.props.dispatch(actions.startToggleTodo(this.props.id, status))
  }

  changeEditStatus() {
    const currentStatus = this.state.edit;
    this.setState({
      edit: !currentStatus
    })
  }


  render () {
    const editStatus = this.state.edit;
    const {text, completed, createdAt, completedAt} = this.props;
    const todoClassName = completed ? 'todo todo-completed' : 'todo';
    const renderDate = () => {
      let message = 'Created at: ';
      let someDate = createdAt;
      if(completed){
        message = 'Completed at: ';
        someDate = completedAt;
      }
      return message + moment.unix(someDate).format('MMMM Do, YYYY @ k:mm ');;
    };
    const renderEditComp = () => {
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
