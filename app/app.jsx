var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var actions = require('actions');
var store = require('configureStore').configure();

import router from 'app/router/'
import firebase from 'firebaseConf'

var css = require('./style.scss');
var foundation = require('../node_modules/foundation-sites/dist/css/foundation.min.css');


firebase.auth().onAuthStateChanged((user) => {
  if (user) {

    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startGetTodos());
    hashHistory.push('/todos')
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/')
  }
});



ReactDOM.render(
    <Provider store={store}>
      {router}
    </Provider>,
          document.getElementById('app')
      );
