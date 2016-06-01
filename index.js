/**
 * @typedef {Object} Comment
 * @property {boolean} abstract
 * @property {Access} access
 * @property {Path[]} augments
 * @property {Author[]} authors
 * @property {*} borrows
 * @property {Unist} classdesc
 * @property {*} constructs
 * @property {Context} context
 * @property {Unist} copyright
 * @property {*} default
 * @property {Unist} deprecated
 * @property {Unist} description
 * @property {*} enum
 * @property {Example[]} examples
 * @property {*} exports
 * @property {Path[]} fires
 * @property {boolean} ignore
 * @property {Path[]} implements
 * @property {boolean} interface
 * @property {Kind} kind
 * @property {*} license
 * @property {Path[]} listens
 * @property {Loc} loc
 * @property {Path} memberof
 * @property {Members} members
 * @property {Path[]} mixes
 * @property {Path} name
 * @property {boolean} override
 * @property {Parameter[]} params
 * @property {Property[]} properties
 * @property {boolean} readonly
 * @property {Path[]} requires
 * @property {Return[]} returns
 * @property {Scope} scope
 * @property {Unist[]} sees
 * @property {Version} since
 * @property {Unist} summary
 * @property {Path} this
 * @property {Throw[]} throws
 * @property {Unist[]} todos
 * @property {*} tutorial
 * @property {Type} type
 * @property {*} variation
 * @property {Version} version
 */

/**
 * Valid values are `'public'`, `'private'`, and `'protected'`.
 * @typedef {String} Access
 */

/**
 * @typedef {Object} Author
 * @property {String} name
 * @property {String} email
 */

/**
 * @typedef {Object} Context
 */

/**
 * @typedef {Object} Example
 * @property {Unist} caption
 * @property {String} code
 */

/**
 * Valid values are `'class'`, `'constant'`, `'event'`, `'external'`, `'file'`, `'function'`, `'member'`, `'mixin'`,
 * `'module'`, `'namespace'`, and `'typedef'`.
 * @typedef {String} Kind
 */

/**
 * @typedef {Object} Loc
 */

/**
 * @typedef {Object} Members
 * @property {Comment[]} inner
 * @property {Comment[]} instance
 * @property {Comment[]} static
 */

/**
 * @typedef {Object} Parameter
 * @property {Type} type
 * @property {Path} name
 * @property {Unist} description
 * @property {Property[]} properties
 */

/**
 * @typedef {Object} Path
 */

/**
 * @typedef {Object} Property
 * @property {Type} type
 * @property {Path} name
 * @property {Unist} description
 * @property {Property[]} properties
 */

/**
 * @typedef {Object} Return
 * @property {Type} type
 * @property {Unist} description
 */

/**
 * Valid values are `'global'`, `'static'`, `'instance'`, and `'inner'`.
 * @typedef {String} Scope
 */

/**
 * @typedef {Object} Throw
 * @property {Type} type
 * @property {Unist} description
 */

/**
 * @typedef {Object} Type
 */

/**
 * @typedef {Object} Unist
 */

/**
 * @typedef {String} Version
 */

var documentation = require('documentation');

/*
 * The callback of this export is called with a single argument consisting of an array of
 * objects which define a schema for JSDoc. Because these objects are themselves defined
 * in JSDoc, they conform to the schema which they themselves define. Very meta!
 */
module.exports = function (callback) {
  documentation.build(__filename, {}, function (err, result) {
    callback(result);
  });
};

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

module.exports.jsonSchema = function (callback) {
  module.exports(function (comments) {
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

    callback(result);
  });
};
