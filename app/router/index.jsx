import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';


import Login from 'Login';
import TodoApp from 'TodoApp';
import firebase from 'firebaseConf';



const requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};


const requireLogout = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos');
  }
  next();
};




export default (
  <Router history = {hashHistory}>
    <Route path='/'>
      <Route path='todos' component={TodoApp} onEnter={requireLogin}/>
      <IndexRoute onEnter={requireLogout} component = {Login}/>
    </Route>
  </Router>
);
