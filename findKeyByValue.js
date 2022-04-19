//const assertEqual = require('./assertEqual');

const findKeyByValue = function(object1, value1) {
  const o1Keys = Object.keys(object1);
  
  for (let key of o1Keys) {
    if (object1[key] === value1) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

/*
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/