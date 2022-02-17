const eqObjects = require('./eqObjects');

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

module.exports = eqObjects;

//assertObjectsEqual({a:" ", b:0}, {b:0, a:" "});