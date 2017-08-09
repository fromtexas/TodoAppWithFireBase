const expect = require('expect');
const reducers = require('reducers');
const df = require('deep-freeze-strict');

describe('Reducers', () => {

  describe('authReducer', () => {
    it('should return auth object on login action', () => {
      var action = {
        type: 'LOGIN',
        uid: 'dig111ddvv'
      };

      var res = reducers.authReducer(df({}), df(action));
      expect(res.uid).toEqual(action.uid);
    });

    it('should return auth object on logout action', () => {
      var action = {
        type: 'LOGOUT'
      };

      var res = reducers.authReducer(df({}), df(action));
      expect(res.uid).toBe(undefined);
    });
  });

  describe('search Text reducer', () => {
    it('should return text from setSearchText action', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dig'
      };

      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);

    });
  });

  describe('show Completed Reducer', () => {
    it('should toggle false to true', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toBe(true);

    });
  });

  describe('todo reducer', () => {
    it('should add todo to array', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id:11,
          text: 'fuck',
          completed: false,
          createdAt: 12345,
          completedAt: null
        }
      };

      var res = reducers.todoReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0].text).toBe(action.todo.text);

    });

    it('should toggle todo', () => {
      var action = {
        type: 'TOGGLE_TODO_UPDATED',
        id: 1,
        completed: false,
        completedAt: null
      };

      var todos = [{
        id: 1,
        text: 'fuckin text',
        completed: false,
        createdAt: '123456',
        completedAt: null
      }];

      var res = reducers.todoReducer(df(todos), df(action));
      expect(res[0].completed).toBe(action.completed);
      expect(res[0].completedAt).toBe(action.completedAt);


    });
  });




});
