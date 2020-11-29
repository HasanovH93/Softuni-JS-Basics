function cakes(input) {
  let width = Number(input[0]);
  let height = Number(input[1]);
  let countPieces = width * height;
  let piecesTaken = 0;
  let command = input[2];

  let index = 3;

  while (command !== "STOP") {
    piecesTaken += Number(command);

    if (piecesTaken > countPieces) {
      break;
    }
    command = input[index];
    index++;
  }
  if (piecesTaken > countPieces) {
    console.log(
      `No more cake left! You need ${piecesTaken - countPieces} pieces more.`
    );
  } else {
    console.log(`${countPieces - piecesTaken} pieces are left.`);
  }
}

cakes(["10", "10", "20", "20", "20", "20", "21"]);
