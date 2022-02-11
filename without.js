
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


const nums = [1, 2, 3];
console.log(without(nums, [2]));
assertArraysEqual(nums, [1, 2, 3])
