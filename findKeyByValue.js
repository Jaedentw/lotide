const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🤬(╯°□°）╯︵ ┻━┻🤬 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`🤑(⌐■_■)🤑 Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKeyByValue = function(object1, value1) {
  const o1Keys = Object.keys(object1);
  let count = 0;
  for (let key of o1Keys) {
    if (object1[key] === value1) {
      return key;
    }
    if (object1[key] !== value1) {
      count += 1;
      if (count === o1Keys.length) {
        return undefined;
      }
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);