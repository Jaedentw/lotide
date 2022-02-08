const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🤬(╯°□°）╯︵ ┻━┻🤬 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`🤑(⌐■_■)🤑 Assertion Passed: ${actual} === ${expected}`);
  }
};


assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 3);