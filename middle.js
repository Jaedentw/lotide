/*
const eqArrays = function(array1, array2) {
  if(array1.length !== array2.length) {return false;}
  let count = 0;
  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i]) {return false;}
    else { count += 1 }
  }
  if (count === array1.length) {return true;}
};

const assertArraysEqual = function(actualArr, expectedArr) {
  if (eqArrays(actualArr, expectedArr)) {
    console.log(`🤑(⌐■_■)🤑 Assertion Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`🤬(╯°□°）╯︵ ┻━┻🤬 Assertion Failed: ${actualArr} !== ${expectedArr}`);
  }
};
*/

const OddEven = function(num) {
  if (num % 2 === 0) {
    return true;
  }
  if (num % 2 !== 0) {
    return false;
  }
};

const middle = function(arrays) {
  let array = arrays;
  let half = (array.length / 2);
  let mid = [];
  if (array.length <= 2) {
    return mid;
  }
  if (array.length >= 3) {
    if (OddEven(array.length)) {
      let find = half - 1;
      let val1 = array[find];
      let val2 = array[half];
      mid.push(val1, val2);
    } else {
      let find = half - 0.5;
      let val = (array[find]);
      mid.push(val);
    }
  }
  return mid;
};

console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));