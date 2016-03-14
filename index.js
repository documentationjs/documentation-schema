/**
 * @typedef {Object} Comment
 * @property {boolean} abstract
 * @property {('public'|'protected'|'private')} access
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
 * @property {('class'|'constant'|'event'|'external'|'file'|'function'|'member'|'mixin'|'module'|'namespace'|'typedef')} kind
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
 * @property {('global'|'static'|'instance'|'inner')} scope
 * @property {Unist[]} see
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
 */

/**
 * @typedef {Object} Path
 */

/**
 * @typedef {Object} Property
 * @property {Type} type
 * @property {Path} name
 * @property {Unist} description
 */

/**
 * @typedef {Object} Return
 * @property {Type} type
 * @property {Unist} description
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
