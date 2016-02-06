Validate [jslicense][jslicense] objects.

The package includes and makes use of a [JSON Schema][schema].

<!--js var validate = require('./'); -->

```js
validate([
  ['(c) ', {field: 'year'}, ' ', {field: 'owners'}],
  ['Not a very good license.']
]); // => true

validate([
  [{"field":"bad field name"}]
]); // => false

validate(require('jslicense-apache-2.0')); // => true
validate(require('jslicense-bsd-2-clause')); // => true
validate(require('jslicense-bsd-3-clause')); // => true
validate(require('jslicense-gpl-3.0')); // => true
validate(require('jslicense-isc')); // => true
validate(require('jslicense-mit')); // => true
validate(require('jslicense-wtfpl')); // => true
```

[jslicense]: http://jslicense.org
[schema]: ./source/schema.json
