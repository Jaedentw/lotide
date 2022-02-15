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

const takeUntil = function(array, callback) {
  const notTru = [];
  for (let item of array) {
    if (callback(item)) {
      return notTru;
    } else {
      notTru.push(item);
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);