import firebase, {firebaseRef, githubProvider} from 'firebaseConf'
import moment from 'moment'

export var setSearchText = (searchText) => {
  return {
    type:'SET_SEARCH_TEXT',
    searchText
  };
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    var todo =
      {
        text,
        completed: false,
        createdAt: moment().unix(),
        completedAt: null
       };
    var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);
    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }))
    })
  }
};


export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var toggleTodoUpdated = (id, updates) => {
  return {
    type: 'TOGGLE_TODO_UPDATED',
    id,
    completed: updates.completed,
    completedAt: updates.completedAt
  };
};


export var startGetTodos = () => {
  return (dispatch, getState) => {
      var uid = getState().auth.uid;
      var todoRef = firebaseRef.child(`users/${uid}/todos`);

      return todoRef.once('value').then((snapshot) => {

        var todosVal = snapshot.val() || {};
        var todos = [];
        var todosKeys = Object.keys(todosVal);

        todosKeys.forEach((id) => {
          todos.push({
            id,
            ...todosVal[id]
          });

        });

        dispatch(addTodos(todos))
      })
  }
};

export var startToggleTodo = (id, status) => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
    var updates = {
      completed: status,
      completedAt: status? moment().unix() : null
    };

    return todoRef.update(updates).then(() => {
      dispatch(toggleTodoUpdated(id, updates))
    })
  }
};

export var startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((res) => {
      console.log('Loged in!',res);
    }, (err) => {
      console.log('Somthing goes wrong',err);
    })
  }
};


export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then((res) => {
      console.log('logout');
    }, (err) => {
      console.log(err);
    })
  }
};

export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  }
};

export var logout = () => {
  return {
    type: 'LOGOUT'
  }
};

export var removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
};

export var startRemovingTodo = (id) => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);

    return todoRef.remove().then(() => {
      dispatch(removeTodo(id))
    })
  }
};

export var editTodo = (id, editValue) => {
  return {
    type: 'EDIT_TODO',
    id,
    editValue
  }
}

export var startEditingTodo = (id, editValue) => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
    var updates = {
      text: editValue
    };
    return todoRef.update(updates).then(() => {
      dispatch(editTodo(id, editValue))
    })
  }

}
