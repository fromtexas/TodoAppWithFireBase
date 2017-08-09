var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');

import {configure} from 'configureStore'
import conectedTodoList, {TodoList} from 'TodoList'
import connectedTodo, {Todo} from 'Todo'



describe('TodoList',() => {
    it('should exist',() => {
        expect(TodoList).toExist();
    });


    it('should render one todo component for todo item',() => {

        var todos = [
          {id:1, text: 'some text', completed: false, completedAt: undefined, createdAt: 12345},
          {id:2, text: 'some text', completed: false, completedAt: undefined, createdAt: 12345}
        ];
        var store = configure({
          todos
        });
        var provider = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <conectedTodoList/>
        </Provider>
      );
      var todoList = TestUtils.scryRenderedComponentsWithType(provider, conectedTodoList)[0];
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, connectedTodo);

        expect(todosComponents.lenght).toBe(todos.lenght);



    });
});
