jslicense-validate.js
=====================

Validate [jslicense][jslicense] objects.

<!--js var validate = require('./'); -->

```js
validate([
  ['(c) ', {field: 'year'}, ' ', {field: 'owners'}],
  ['Not a very good license.']
]); // => true
validate(require('jslicense-isc')); // => true
validate(require('jslicense-mit')); // => true
validate(require('jslicense-wtfpl')); // => true
validate([
  [{"field":"bad field name"}]
]); // => false
```

[jslicense]: http://jslicense.org
