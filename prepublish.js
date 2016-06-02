var documentation = require('documentation');
var fs = require('fs');

/*
 * The callback of this export is called with a single argument consisting of an array of
 * objects which define a schema for JSDoc. Because these objects are themselves defined
 * in JSDoc, they conform to the schema which they themselves define. Very meta!
 */
var comments = documentation.buildSync([{
  source: fs.readFileSync('./input.js', 'utf8'),
  file: './input.js'
}], {});

fs.writeFileSync('./comments.json', JSON.stringify(comments, null, 2))
