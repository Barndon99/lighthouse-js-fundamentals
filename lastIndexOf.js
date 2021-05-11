const lastIndexOf = function (array, value) {
  if (array.length === 0 || array === undefined) {
    return -1;
  }

  let i = 0;
  
  for (i = (array.length - 1); i > -1; i--) {
    if (array[i] === value) {
      return i;
    }
  } return -1;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);