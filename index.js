const map = require('./map');
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const without = require('./without');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const takeUntil = require('./takeUntil');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const letterPositions = require('./letterPositions');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');


module.exports = {
  map,
  head,
  tail,
  middle,
  flatten,
  without,
  eqArrays,
  eqObjects,
  takeUntil,
  countOnly,
  countLetters,
  letterPositions,
  findKey,
  findKeyByValue,
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual
};
