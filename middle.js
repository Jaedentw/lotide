const OddEven = function(num) {
  if(num % 2 === 0) { 
    return true;
  }
  if(num % 2 !== 0){
    return false;
  }
};

const middle = function(arrays) {
  let array = arrays;
  let half = (array.length/2);
  let mid = [];
  if (array.length <= 2) { return mid; }
  if (array.length >= 3) {
    if(OddEven(array.length)) {
      let find = half - 1
      let val1 = array[find]
      let val2 = array[half]
      mid.push ( val1, val2 )
    } else {
      let find = half - 0.5
      let val = (array[find])
      mid.push (val)
    }
  }
  return mid;
};

console.log(middle([1, 2]))
console.log(middle([1, 2, 3, 4, 5]))
console.log(middle([1, 2, 3, 4, 5, 6]))