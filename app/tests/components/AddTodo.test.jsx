var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');


var AddTodo = require('AddTodo');

describe('AddTodo',() => {
    it('should exist',() => {
        expect(AddTodo).toExist();
    });

    // it('should call prop on valid data',() => {
    //      var spy = expect.createSpy();
    //      var addTodo = TestUtils.renderIntoDocument(<AddTodo newTodo={spy}/>);
    //      var el = ReactDOM.findDOMNode(addTodo);
    //
    //      addTodo.refs.todo.value = 'smth';
    //
    //     TestUtils.simulate.submit(el.querySelector('form'));
    //
    //     expect(spy).toHaveBeenCalledWith('smth');
    // });




});
