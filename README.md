Validate [jslicense][jslicense] templates.

The package includes and makes use of a [JSON Schema][schema].

```javascript
var validate = require('jslicense-validate')
var assert = require('assert')

assert(
  validate(
    [ [ '(c) ', { field: 'year' }, ' ', { field: 'owners' } ],
      [ 'Not a very good license.' ] ]))

assert(
  !validate(
    [ [ { 'field': 'bad field name' } ] ]))

assert(validate(require('jslicense-apache-2.0')))
assert(validate(require('jslicense-bsd-2-clause')))
assert(validate(require('jslicense-bsd-3-clause')))
assert(validate(require('jslicense-gpl-3.0')))
assert(validate(require('jslicense-isc')))
assert(validate(require('jslicense-mit')))
assert(validate(require('jslicense-wtfpl')))

// The JSON Schema itself
assert.equal(
  typeof require('jslicense-validate/schema'),
  'object')
```

[jslicense]: http://jslicense.org
[schema]: ./source/schema.json
