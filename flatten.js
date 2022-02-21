const flatten = function(array1) {
  const flattened = [];
  for (let element1 of array1) {
    if (Array.isArray(element1)) {
      for (let element2 of element1) {
        flattened.push(element2);
      }
    } else {
      flattened.push(element1);
    }
  }
  return flattened;
};

module.exports = flatten;

//console.log(flatten([1, 2, [3, 4], 5, [6]]));