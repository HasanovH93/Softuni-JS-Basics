function biggestNumber(input) {
  let index = 0;
  let command = input[index++];

  let maxNumber = Number.MIN_SAFE_INTEGER;

  while (command !== "Stop") {
    let num = Number(command);

    if (maxNumber < num) {
      maxNumber = num;
    }
    command = input[index++];
  }
  console.log(maxNumber);
}

biggestNumber(["-10", "-20", "-30", "Stop"]);
