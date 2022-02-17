const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail([]), undefined);
assertEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
console.log(tail([1, 2, 3, 4]));
console.log([2, 3, 4]);
assertEqual(tail(['hi', 'hello']), ['hello']);