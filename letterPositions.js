const countLetters = require('./countLetters');

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

module.exports = letterPositions;

//console.log( letterPositions('mississippy'));