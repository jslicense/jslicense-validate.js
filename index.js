var validate = require('jsonschema').validate;
var schema = require('./schema.json');

module.exports = function(argument) {
  return validate(argument, schema).valid;
};
