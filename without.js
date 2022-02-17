//const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove){
  let permitted = [];
  for (let i = 0; i < source.length; i++){
    let count = 0;
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source[i] !== itemsToRemove[y]) {
        count += 1;
      }
    }
    if(count === itemsToRemove.length){ 
      permitted.push(source[i]);
    }
  }
  return permitted;
};

module.exports = without;

/*
const nums = [1, 2, 3];
console.log(without(nums, [2]));
assertArraysEqual(nums, [1, 2, 3])
*/
