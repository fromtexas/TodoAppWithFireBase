var uuid = require('node-uuid');
var moment = require('moment');



export var searchTextReducer = (state='', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
};

export var showCompletedReducer = (state=false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return state? false : true;
    default:
    return state;
  }
};

export var todoReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.todo];
       case 'TOGGLE_TODO_UPDATED':
        var newArr = state.map((item) => {
          if(item.id !== action.id){
            return item;
          }else{
            return {
              ...item,
              completed: action.completed,
              completedAt: action.completedAt
            };
          }
        });
        return newArr;
        case 'ADD_TODOS':
        return [
          ...state,
          ...action.todos
        ];
        case 'LOGOUT':
        return [];
    default:
      return  state;
  }
};

export var authReducer = (state={}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
      uid: action.uid
      } ;
    case 'LOGOUT':
      return {
        uid: undefined
      } ;
    default:
      return state;
  }
};
