var comments = require('./comments.json');
module.exports.comments = comments;

function typeToSchema(type) {
  if (type.name === 'boolean') {
    return {
      type: 'boolean'
    };
  } else if (type.name === 'String') {
    return {
      type: 'string'
    };
  } else if (type.type === 'NameExpression') {
    return {
      $ref: '#/definitions/' + type.name
    };
  } else if (type.type === 'TypeApplication' && type.expression.name === 'Array') {
    return {
      type: 'array',
      items: typeToSchema(type.applications[0])
    };
  } else if (type.type === 'AllLiteral') {
    return {};
  } else {
    throw new Error('unknown type ' + type);
  }
}

function commentToSchema(comment) {
  switch (comment.name) {
  case 'Access':
    return {
      type: 'string',
      enum: ['public', 'private', 'protected']
    };

  case 'Kind':
    return {
      type: 'string',
      enum: [
        'class', 'constant', 'event', 'external', 'file', 'function',
        'member', 'mixin', 'module', 'namespace', 'typedef'
      ]
    };

  case 'Scope':
    return {
      type: 'string',
      enum: ['global', 'static', 'instance', 'inner']
    };

  default:
    return {
      type: 'object',
      properties: (comment.properties || []).reduce(function (properties, property) {
        properties[property.name] = typeToSchema(property.type);
        return properties;
      }, {})
    };
  }
}

module.exports.jsonSchema = (function () {
  var result = commentToSchema(comments.find(function (comment) {
    return comment.name === 'Comment';
  }));

  result.$schema = 'http://json-schema.org/draft-04/schema#';

  result.definitions = comments
    .filter(function (comment) {
      return comment.name !== 'Comment';
    })
    .reduce(function (definitions, comment) {
      definitions[comment.name] = commentToSchema(comment);
      return definitions;
    }, {});

  return result;
})();
