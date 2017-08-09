var expect = require('expect');

const TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set item to localStorage', () => {
      var todos = [{
        id: 1,
        text: 'some txt',
        completed: false
      }];

      TodoAPI.setTodos(todos);

      var getArr = localStorage.getItem('todos');
      var arr = JSON.parse(getArr);

      expect(arr).toEqual(todos);



    });
  });

  describe('getTodos', () => {
    it('should get items from localStorage', () => {
      var todos = [{
        id: 1,
        text: 'some txt',
        completed: false
      }];

    var get =  TodoAPI.getTodos();

      expect(get).toEqual(todos);



    });
  });

  describe('filterTodos', () => {

    var todos = [{
      id: 1,
      text: 'some txt',
      completed: false
    },{
      id: 2,
      text: 'some txt',
      completed: false
    },{
      id: 3,
      text: 'some txt',
      completed: false
    }];


    it('should filter items in todos', () => {
    var filter =  TodoAPI.filterTodos(todos, true, '');

      expect(filter.length).toBe(3);



    });

    it('should filter items in todos completed false', () => {
    var filter =  TodoAPI.filterTodos(todos, false, '');

      expect(filter.length).toBe(3);

    });

    it('should search text in todos', () => {
    var filter =  TodoAPI.filterTodos(todos, false, 'txt');

      expect(filter.length).toBe(3);

    });

    it('should return all todos', () => {
    var filter =  TodoAPI.filterTodos(todos, false, '');

      expect(filter.length).toBe(3);

    });



  });




});
