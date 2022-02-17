const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

assertArraysEqual(tail([]), undefined);
assertArraysEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
assertArraysEqual(tail(['hi', 'hello']), ['hello']);