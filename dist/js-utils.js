//  JS-Utils v1.0.4
//  https://github.com/gusbueno/js-utils
//  (c) 2018-2019 Gustavo Bueno
//  JS-Utils may be freely distributed under the MIT license.

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.JSUtils = {}));
}(this, function (exports) { 'use strict';

  //      

  /**
   * data: list of item
   * key: name of the field that will be the key for each item in object generated
   * 
   * it returns an object
   */

  const arrayToObject = (data            , key        )         => {
    return data.reduce((obj, item) => {
      obj[item[key]] = item;
      return obj
    }, {})
  };

  //      

  /**
   * promise: the request using async/await operator
   * 
   * it returns an  array
   */

  const to = (promise         )             => {
    return promise.then((data     ) => {
      return [null, data]
    }).catch(err => [err])
  };

  exports.arrayToObject = arrayToObject;
  exports.to = to;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
