const map = require('./map');
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const takeUntil = require('./takeUntil');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');


module.exports = {
  map: map,
  head: head,
  tail: tail,
  middle: middle,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  takeUntil: takeUntil,
  countOnly: countOnly,
  countLetters: countLetters,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual
};