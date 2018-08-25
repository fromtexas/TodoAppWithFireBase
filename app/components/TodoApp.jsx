import React from "react";
import TodoList from "TodoList";
import AddTodo from "AddTodo";
import TodoSearch from "TodoSearch";
import * as Redux from "react-redux";
import * as actions from "actions";

export class TodoApp extends React.Component {
  startLogout(e) {
    e.preventDefault();
    var { dispatch } = this.props;
    dispatch(actions.startLogout());
  }

  render() {
    return (
      <div className="grid-x">
        <div className="medium-12 large-12 small-12 cell">
          <div className="app-nav">
            <a
              onClick={this.startLogout.bind(this)}
              className="button alert"
              href="#"
            >
              <i className="ion-android-arrow-back" /> Logout
            </a>
          </div>
        </div>

        <div className="medium-6 medium-offset-3 large-offset-4 large-4 small-10 small-offset-1 cell">
          <h1 className="text-center page-title">Todo App</h1>
          <div className="app-container">
            <TodoSearch />
            <TodoList />
            <AddTodo />
          </div>
        </div>
      </div>
    );
  }
}

export default Redux.connect()(TodoApp);
