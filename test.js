'use strict';

var test = require('tap').test;
var schema = require('.');
var validate = require('json-schema');

test('schema', function (t) {
  t.ok(schema.comments, 'exposes comments');
  t.end();
});

test('self-validation', function (t) {
  schema.comments.forEach(function (comment) {
    var errors = validate(comment, schema.jsonSchema).errors;
    errors.forEach(function (error) {
      t.ifError(error);
    });
  });
  t.end();
});
