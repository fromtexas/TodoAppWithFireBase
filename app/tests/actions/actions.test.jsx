const expect = require('expect');

import * as actions from 'actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import firebase, {firebaseRef} from 'firebaseConf'
var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should add uid to store', () => {
    var uid = '12334345gggdd444';

    var res = actions.login(uid);

    expect(res.uid).toBe(uid);

  });

  it('should remove uid from store', () => {


    var res = actions.logout();

    expect(res.uid).toBe(undefined);

  });

  it('should add search text', () => {
    var text = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'some txt'
    };

    var res = actions.setSearchText('some txt');

    expect(res).toEqual(text);
  });

  it('should add todo', () => {
    var todo = {
      type: 'ADD_TODO',
      todo: {
        id:11,
        text: 'fuck',
        completed: false,
        createdAt: 12345,
        completedAt: null
      }
    };

    var res = actions.addTodo({
    id:11,
    text: 'fuck',
    completed: false,
    createdAt: 12345,
    completedAt: null
    });
    expect(res).toEqual(todo);
  });

  it('should toggle todo completed', () => {
    var toggle = {
      type: 'TOGGLE_TODO_UPDATED',
      id: 1,
      completed: false,
      completedAt: null
    };

    var res = actions.toggleTodoUpdated(1, {completed:false, completedAt: null});
    expect(res).toEqual(toggle);
  });

  it('should toggle show completed', () => {
    var toggle = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    var res = actions.toggleShowCompleted();
    expect(res).toEqual(toggle);
  });



  describe('test with firebase todos', () => {
    var testTodoRef ;
    var uid;
    var todosRef;

    beforeEach((done) => {
      var credential = firebase.auth.GithubAuthProvider.credential(process.env.GITGUN_ACCESS_TOKEN);

      firebase.auth().signInWithCredential(credential).then((user) => {
        uid = user.uid;
        todosRef = firebaseRef.child(`users/${uid}/todos`);

        return    todosRef.remove();
      }).then(() => {
      testTodoRef =   todosRef.push();
       return testTodoRef.set({
        text: 'somth',
        completed: false,
        completedAt: null,
        createdAt: 123456
      })
      }).then(() => {done()}).catch(done);




    });

    afterEach((done) => {
      todosRef.remove().then(() => {done()})
    });

    it('should toggle todo and dispath update action', (done) => {
       const store = createMockStore({auth:{uid}});
       const action = actions.startToggleTodo(testTodoRef.key, true);

       store.dispatch(action).then(() => {
         const mockAction = store.getActions();

         expect(mockAction[0]).toInclude({
           type: 'TOGGLE_TODO_UPDATED',
           id: testTodoRef.key,
           completed: true
         });

         done();



       }, done);


    });


    it('should start adding todo to store', (done) => {
      const store = createMockStore({auth:{uid}});
      const action = actions.startGetTodos();

      store.dispatch(action).then(() => {
        const mockAction = store.getActions();

        expect(mockAction[0]).toInclude({
          type: 'ADD_TODOS'
        });

        expect(mockAction[0].todos.length).toBe(1);

        done();



      }, done);

    });

    it('should create todo and dispatch add todo', (done) => {
      const store = createMockStore({auth:{uid}});
      const todoText = 'my todo item';

      store.dispatch(actions.startAddTodo(todoText)).then(() => {
        const actions = store.getActions(); // to get all fired actions
        expect(actions[0]).toInclude({
          type: 'ADD_TODO'
        });
        expect(actions[0].todo).toInclude({
          text: todoText
        });
        done();
      }).catch(done);

    });



  });


});
