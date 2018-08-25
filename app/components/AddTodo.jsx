import React from "react";
import { connect } from "react-redux";
import * as actions from "actions";

export class AddTodo extends React.Component {
  onFormSubmit(e) {
    const todo = this.refs.todo.value;
    if (todo) {
      this.props.dispatch(actions.startAddTodo(todo));
      this.refs.todo.value = "";
    } else {
      this.refs.todo.focus();
    }
    e.preventDefault();
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input placeholder="Add somthing" type="text" ref="todo" />
          <button className="button expanded">
            <i className="ion-android-done" /> Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
