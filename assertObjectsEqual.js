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

const eqObjects = function(object1, object2) {

  const keys1 = (Object.keys(object1)).sort()
  const keys2 = (Object.keys(object2)).sort()

  if(keys1.length !== keys2.length) {
    return false;
  }

  let count = 0;

  if(eqArrays(keys1, keys2)) {
    for(let key of keys1) {
      if(object1[key] !== object2[key]) {
        return false;
      }
      if(object1[key] === object2[key]) {
        count += 1;
        if (count === key.length) {
          return true;
        }
        count -= count;
      }
    }
  }
  else {
    return false;
  }
  
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let tf = eqObjects(actual, expected)
  console.log(tf)
  if(tf) {
    console.log(`🤑(⌐■_■)🤑 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  }
  else {
    console.log(`🤬(╯°□°）╯︵ ┻━┻🤬 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
};

assertObjectsEqual({a:" ", b:0}, {b:0, a:" "});