const eqArrays = function(array1, array2) {
  if( array1 === undefined || array2 === undefined) {
    return false;
  }
  if(array1.length !== array2.length) {return false;}
  let count = 0;
  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i]) {return false;}
    else { count += 1 }
  }
  if (count === array1.length) {return true;}
};

module.exports = eqArrays;