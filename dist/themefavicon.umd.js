(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.ThemeFavicon = {}));
}(this, (function (exports) { 'use strict';

  var method = function () {
    console.log('method');
  };

  exports.default = method;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
