"use strict";

var _this = void 0;

var Generator = function Generator(param1, param2) {
  _this.attribute1 = param1;
  _this.attribute2 = param2;

  _this.method1 = function (param1) {
    alert(param1);
  };
};

module.exports = Generator;