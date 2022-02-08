const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🤬(╯°□°）╯︵ ┻━┻🤬 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`🤑(⌐■_■)🤑 Assertion Passed: ${actual} === ${expected}`);
  }
};

const head = function(array) {
  return array[0]
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 'hi')