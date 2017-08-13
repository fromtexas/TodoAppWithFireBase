import React from 'react'
import {connect} from 'react-redux'
import * as actions from 'actions'

export class EditRemoveTodo extends React.Component {
  removeTodo () {
    var id = this.props.id;
    this.props.dispatch(actions.startRemovingTodo(id))
  }

  editTodo () {
    this.props.changeEditStatus()
  }


  render (){
    return (
      <div className='controls-container'>
        <i onClick={this.removeTodo.bind(this)} className='ion-close-round remove-todo todo-controls'></i>
        <i onClick={this.editTodo.bind(this)} className='ion-android-settings edit-todo todo-controls'></i>
      </div>
    )
  }
}

export default connect()(EditRemoveTodo);
