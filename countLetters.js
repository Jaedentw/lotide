//const countOnly = require('./countOnly');

const countLetters = function(string) {
  
  const scores = {};

  for (let letter of string) {
    if (letter !== ' ') {
      if (scores[letter]) {
        scores[letter] += 1;
      } else {
        scores[letter] = 1;
      }
    }
  }

  return scores;
  
};

module.exports = countLetters;

console.log(countLetters('mississippy mississippy'));

/*
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
*/