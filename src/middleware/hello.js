'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    console.log('hello', req.params)
    next();
  };
};
