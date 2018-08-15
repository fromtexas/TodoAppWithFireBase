import firebase, {firebaseRef, githubProvider} from 'firebaseConf'
import moment from 'moment'

export const setSearchText = (searchText) => {
  return {
    type:'SET_SEARCH_TEXT',
    searchText
  };
};

export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export const addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export const startAddTodo = (text) => {
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


export const toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export const toggleTodoUpdated = (id, updates) => {
  return {
    type: 'TOGGLE_TODO_UPDATED',
    id,
    completed: updates.completed,
    completedAt: updates.completedAt
  };
};


export const startGetTodos = () => {
  return (dispatch, getState) => {
      const uid = getState().auth.uid;
      const todoRef = firebaseRef.child(`users/${uid}/todos`);

      return todoRef.once('value').then((snapshot) => {

        const todosVal = snapshot.val() || {};
        const todos = [];
        const todosKeys = Object.keys(todosVal);

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

export const startToggleTodo = (id, status) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
    const updates = {
      completed: status,
      completedAt: status? moment().unix() : null
    };

    return todoRef.update(updates).then(() => {
      dispatch(toggleTodoUpdated(id, updates))
    })
  }
};

export const startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((res) => {
      console.log('Loged in!',res);
    }, (err) => {
      console.log('Somthing goes wrong',err);
    })
  }
};


export const startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then((res) => {
      console.log('logout');
    }, (err) => {
      console.log(err);
    })
  }
};

export const login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  }
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
};

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
};

export const startRemovingTodo = (id) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);

    return todoRef.remove().then(() => {
      dispatch(removeTodo(id))
    })
  }
};

export const editTodo = (id, editValue) => {
  return {
    type: 'EDIT_TODO',
    id,
    editValue
  }
}

export const startEditingTodo = (id, editValue) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
    const updates = {
      text: editValue
    };
    return todoRef.update(updates).then(() => {
      dispatch(editTodo(id, editValue))
    })
  }

}
