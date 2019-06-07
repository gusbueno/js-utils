"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * data: list of item
 * key: name of the field that will be the key for each item in object generated
 * 
 * it returns an object
 */
var arrayToObject = function arrayToObject(data, key) {
  return data.reduce(function (obj, item) {
    obj[item[key]] = item;
    return obj;
  }, {});
};

var _default = arrayToObject;
exports["default"] = _default;