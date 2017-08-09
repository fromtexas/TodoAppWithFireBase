var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

import {TodoApp} from 'TodoApp'


describe('TodoApp',() => {
    it('should exist',() => {
        expect(TodoApp).toExist();
    });

  });
