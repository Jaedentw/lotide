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
  }
  
  return results;
};

const countLetters = function(string) {
  
  let count = 0;
  const scores = {};
  let keys = Object.keys(scores);

  for (let l = 0; l < string.length; l++) {
    for (let x = 0; x <= keys.length; x++) {
      if (string[l] !== keys[x] && string[l] !== ' ') {
        count += 1;
        if (count >= keys.length) {
          scores[string[l]] = true;
          count = count - count;
        }
      }
    }
  }
  const final = countOnly(string, scores);
  return final;
};

const letterPositions = function(String) {
  
  const occurance = countLetters(String);
  let iOfLast = 0;
  for (let letter in occurance) {

    let tempArray = [];

    for (let i = 0; i <= occurance[letter]; i++) {
      let iVal = String.indexOf(letter, iOfLast);
      if (iVal >= 0) {
        tempArray.push(iVal);
      }
      iOfLast = iVal + 1;
    }

    occurance[letter] = tempArray;
  }

  return occurance;
};

console.log( letterPositions('mississippy'));