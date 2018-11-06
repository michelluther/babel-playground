"use strict";

var Generator = require('./someModule');

var one = 'one';

var myFunc = function myFunc(parameter1) {
  var generator = new Generator('test 1', 'test 2');
  generator.method1('test 3');
  console.log(parameter1);
};

myFunc('test 0');