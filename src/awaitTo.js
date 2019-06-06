"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.to = void 0;

/**
 * promise: the request using async/await operator
 * 
 * it returns an  array
 */
var to = function to(promise) {
  return promise.then(function (data) {
    return [null, data];
  })["catch"](function (err) {
    return [err];
  });
};

exports.to = to;
var _default = to;
exports["default"] = _default;