'use strict';

var test = require('tap').test;
var schema = require('.');
var validate = require('json-schema');

test('schema', function (t) {
  schema(function (comments) {
    t.ok(comments);
    t.end();
  });
});

test('self-validation', function (t) {
  schema.jsonSchema(function (jsonSchema) {
    schema(function (comments) {
      comments.forEach(function (comment) {
        var errors = validate(comment, jsonSchema).errors;
        errors.forEach(function (error) {
          t.ifError(error);
        });
      });
      t.end();
    });
  });
});
