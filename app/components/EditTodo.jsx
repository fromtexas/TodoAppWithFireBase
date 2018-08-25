import React from "react";
import { connect } from "react-redux";
import * as actions from "actions";

export class EditTodo extends React.Component {
  edit(e) {
    var { id } = this.props;
    var editValue = this.refs.todo.value;
    if (editValue) {
      this.props.dispatch(actions.startEditingTodo(id, editValue));
      this.refs.todo.value = "";
      this.props.changeEditStatus();
    } else {
      this.refs.todo.focus();
    }
    e.preventDefault();
  }

  render() {
    var { text } = this.props;
    return (
      <div className="edit-todo-form">
        <form onSubmit={this.edit.bind(this)}>
          <input
            defaultValue={text}
            placeholder="Add somthing"
            type="text"
            ref="todo"
          />
          <button className="button expanded custom-margin">
            <i className="ion-android-done-all" /> Save
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(EditTodo);
