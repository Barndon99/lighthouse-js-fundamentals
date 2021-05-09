const finalPosition = function (names) {
  const position = [];
  let x = 0;
  let y = 0;

  for (let i = 0; i < names.length; i++) {
    if (moves[i] === "north") {
      x = x + 1;
    } else if (moves[i] === "south") {
      x = x - 1;
    } else if (moves[i] === "east") {
      y = y + 1;
    } else if (moves[i] === "west") {
      y = y - 1;
    }
  }
  position.push(y, x);
  return position;
}