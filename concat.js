const concat = function(array1, array2) {
  let array3 = array1.concat(array2);
  return array3;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);