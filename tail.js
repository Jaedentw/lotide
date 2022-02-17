const tail = function(array) {
  let a = [...array];
  a.splice(0, 1);
  return a;
};
 module.exports = tail;
