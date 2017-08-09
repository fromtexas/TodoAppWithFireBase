// import firebase from 'firebase'
//
// var config = {
//   apiKey: "AIzaSyDYHchleUthhLwXUkc2CASUnYTjdM2Uzw8",
//   authDomain: "todowithfirebase-dcb0d.firebaseapp.com",
//   databaseURL: "https://todowithfirebase-dcb0d.firebaseio.com",
//   projectId: "todowithfirebase-dcb0d",
//   storageBucket: "todowithfirebase-dcb0d.appspot.com",
//   messagingSenderId: "677807884444"
// };
// firebase.initializeApp(config);
//
// var firebaseRef = firebase.database().ref();
//
// firebaseRef.set({
//   app: {
//     name: 'Todo With Firebase',
//     version: '0.01'
//   },
//   isRunning: true,
//   user: {
//     name: 'Oleg',
//     age: 27
//   }
// });


// firebaseRef.child('user').set({
//   name:' Mike'
// });
//
// firebaseRef.child('app').set({
//   name:'TodoWithDB'
// });

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application' //multi-path update
// });
//
// firebaseRef.child('app').update({
//   version: '0.1'
// }).then(() => {
//   console.log('update worked');
// }, (e) => {
//   console.log('update failed');
// });


//add new line to firebase
//----------------------

// firebaseRef.update({
//   color: '#000'
// })



//multi-path update
//-------------------------

// firebaseRef.update({
//   'app/name': 'ToDoWithFire',
//   'user/name': 'Some useless shit'
// });


// //child update
// //---------------------------

// firebaseRef.child('app').update({
//   name: 'Some Name'
// });
//
// firebaseRef.child('user').update({
//   name: 'Some Name'
// });


//remove
//---------------------

// firebaseRef.child('user/name').remove();
// firebaseRef.update({
//   isRunning: null
// });



//get entire data from firebase
//------------------------------

// firebaseRef.once('value').then((snapshot) => {
//   console.log('entire db value', snapshot.val());
// }, (e) => {
//   console.log('somthing goes wrong', e);
// });

//get single child object
//------------------------

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('app value',snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('somthing goes wrong', e);
// });

//get value on change db data
//--------------------------

// firebaseRef.on('value', (snapshot) => {
//   console.log('got new value', snapshot.val());
// });

//turn off event listener 'on'
//-----------------------------
// firebaseRef.off();

//another way to do the same
//----------------------

// var logData = (snapshot) => {
//     console.log('got new value in another way', snapshot.val());
// };
//
// firebaseRef.on('value', logData);



// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log(snapshot.val());
// });
//
// firebaseRef.update({
//   'user/name': 'some new name'
// });
//
// firebaseRef.update({
//   'app/name' : 'app name'
// });

// var todosRef = firebaseRef.child('todos');
//
// todosRef.push({text: 'kill all people'});
// todosRef.push({text: 'take off the garbage'});

//on options (child_added, child_changed, child_removed)
//-------------------------------------------

// todosRef.on('child_added', (snapshot) => {
//   console.log('child was added', snapshot.val(), snapshot.key);
// });
