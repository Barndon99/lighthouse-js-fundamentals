const howManyHundreds = function (num) {
  let x = 0;
  while (num >= 100) {
    num = num - 100;
    x++;
  } return x;
}

console.log(howManyHundreds(274));