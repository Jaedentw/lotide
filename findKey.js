//const assertEqual = require('./assertEqual');

const findKey = function(object1, callback) {
  for (let key in object1) {
    if (callback(object1[key])) {
      return key;
    }

  }
};

module.exports = findKey;

/*
const test = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

assertEqual(test, "noma");
*/