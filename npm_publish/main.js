console.log('Publishing package to npm...');

var isNumber = require('is-number');

isNumber(123); // true

console.log(isNumber('123')); // true
console.log(isNumber('abc')); // false