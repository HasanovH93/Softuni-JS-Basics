function solve(input) {
  let index = 0;

  let w = Number(input[index++]);
  let l = Number(input[index++]);
  let h = Number(input[index++]);

  let boxSize = w * l * h;

  let command = input[index++];

  while (command !== "Done") {
    let box = Number(command);

    boxSize -= box;

    if (boxSize < 0) {
      console.log(
        `No more free space! You need ${Math.abs(boxSize)} free space`
      );
      break;
    }
    command = input[index++];
  }
}

solve(["10", "10", "2", "20", "20", "20", "20", "122"]);
