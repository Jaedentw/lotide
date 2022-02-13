const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🤬(╯°□°）╯︵ ┻━┻🤬 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`🤑(⌐■_■)🤑 Assertion Passed: ${actual} === ${expected}`);
  }
};



const countOnly = function(allItems, itemsToCount) {
  
  const results = {};

  for (let name2 of allItems) {
    if (itemsToCount[name2]) {
      if (results[name2]) {
        results[name2] += 1;
      } else {
        results[name2] = 1;
      }
    }
    console.log(name2);
  }
  
  return results;
};



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {
  "Jason": true, //1
  "Karima": true,
  "Fang": true, //1
  "Agouhanna": false
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
