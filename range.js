const range = function (start, end, step) {
  const emptyArray = [];
  let x = 0;

  if (start === undefined || end === undefined || step === undefined || step < 0) {
    console.log("must use integers");
    return [];
  } else {
    for (x = start; x <= end; x += step) {
      emptyArray.push(x);
    }
  }
  return emptyArray;
}
