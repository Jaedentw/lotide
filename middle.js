const middle = function(arrays) {
  const array = arrays;
  const half = (array.length / 2);
  let mid = [];
  if (array.length <= 2) {
    return mid;
  }
  if (array.length >= 3) {
    if ((array.length) % 2 === 0) {
      let find = half - 1;
      let val1 = array[find];
      let val2 = array[half];
      mid.push(val1, val2);
    } 
    if (array.length % 2 !== 0){
      let find = half - 0.5;
      let val = (array[find]);
      mid.push(val);
    }
  }
  return mid;
};

module.exports = middle;