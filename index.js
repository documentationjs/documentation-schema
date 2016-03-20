/**
 * @typedef {Object} Comment
 * @property {boolean} abstract
 * @property {Access} access
 * @property {Path[]} augments
 * @property {Author[]} authors
 * @property {*} borrows
 * @property {*} callback
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
