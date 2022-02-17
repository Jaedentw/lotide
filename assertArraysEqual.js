const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actualArr, expectedArr) {
  if (eqArrays(actualArr, expectedArr)) {
    console.log(`🤑(⌐■_■)🤑 Assertion Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`🤬(╯°□°）╯︵ ┻━┻🤬 Assertion Failed: ${actualArr} !== ${expectedArr}`);
  }
};

module.exports = assertArraysEqual;
