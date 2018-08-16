import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import * as actions from 'actions';
import {configure} from 'configureStore';

import router from 'app/router/';
import firebase from 'firebaseConf';

import css from './style.scss';
import foundation from '../node_modules/foundation-sites/dist/css/foundation.min.css';
import ionicons from '../node_modules/ionicons-npm/css/ionicons.min.css';


var store = configure();

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
