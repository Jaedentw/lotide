# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jaedentw/lotide`

**Require it:**

`const _ = require('@jaedentw/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `map(...)`: Takes in an array and a callback function. Returns a new array based on the results of the callback function. Does not alter original array or callback.
* `head(...)`: Returns the first element in an array. Does not alter original array.
* `tail(...)`: Returns all elements except the first of an array. Does not alter original array.
* `middle(...)`: Returns the middle most element/s of an array. Does not alter original array.
* `flatten(...)`: Integrates the values of single layer nested arrays into the parent array. Does not alter original array.
* `without(...)`: Takes in a source array and a itemsToRemove array. Returns an array of all elements of the source array that are not listed in itemsToRemove array. Does not alter original arrays.
* `eqArrays(...)`: Returns true if the given arrays are a perfect match, and false if they are not.
* `eqObjects(...)`: Returns true if the given Objects are a perfect match, and false if they are not.
* `takeUntil(...)`: Takes in an array and a callback function. Removes elements from the given array until the callback returns a truthy value. Returns a new array, does not alter the original array or callback.
* `countOnly(...)`: Takes in array and an object. It will return an object containing counts of everything that the input object listed. Does not alter the original array or object.
* `countLetters(...)`: The function should take in a string and then return a count of each of the letters in that sentence, in the form of an object. Does not alter the original string.
* `letterPositions(...)`: Takes in a string and returns an object that contains the indicies of each letter within. Does not alter the original string.
* `findKey(...)`: Takes in an object and a callback. Returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined. Does not alter the original object or callback.
* `findKeyByValue(...)`: Takes in an object and a value. Will return the first key of the given object, which contains the given value. If no key with the given value is found, then it will return undefined.
* `assertEqual(...)`: Confirms that two values are equal and console logs a confirmation.
* `assertArraysEqual(...)`: Confirms that two arrays are equal and console logs a confirmation.
* `assertObjectsEqual(...)`: Confirms that two objects are equal and console logs a confirmation.
