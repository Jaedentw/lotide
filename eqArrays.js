/*
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🤬(╯°□°）╯︵ ┻━┻🤬 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`🤑(⌐■_■)🤑 Assertion Passed: ${actual} === ${expected}`);
  }
};
*/

const eqArrays = function(array1, array2) {
  if(array1.length !== array2.length) {return false;}
  let count = 0;
  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i]) {return false;}
    else { count += 1 }
  }
  if (count === array1.length) {return true;}
};


//console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));