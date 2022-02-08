/*
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🤬(╯°□°）╯︵ ┻━┻🤬 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`🤑(⌐■_■)🤑 Assertion Passed: ${actual} === ${expected}`);
  }
};
*/

const tail = function(array) {
  let a = array;
  a.splice(0, 1);
  return a;
};

console.log(tail([]));
console.log(tail([1]));
console.log(tail(['hi', 'hello']));