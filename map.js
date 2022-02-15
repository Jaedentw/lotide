const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  let count = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } else {
      count += 1;
    }
  }
  if (count === array1.length) {
    return true;
  }
};

const assertArraysEqual = function(actualArr, expectedArr) {
  if (eqArrays(actualArr, expectedArr)) {
    console.log(`🤑(⌐■_■)🤑 Assertion Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`🤬(╯°□°）╯︵ ┻━┻🤬 Assertion Failed: ${actualArr} !== ${expectedArr}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't']);