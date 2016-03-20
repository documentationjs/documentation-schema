'use strict';

var test = require('tap').test;
var schema = require('.');

test('schema', function (t) {
  schema(function (comments) {
    t.ok(comments);
    t.end();
  });
});
