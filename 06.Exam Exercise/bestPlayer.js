function bestPlayer(input) {
  let goalsCounter = 0;

  let index = 0;
  let command = input[index++];
  let name = "";
  let bestPlayer = '';
  while (command !== "END") {
    name = command;
    let goals = Number(input[index++]);

    if (goals > goalsCounter) {
      goalsCounter = goals;
      bestPlayer = name;

    }
    if (goalsCounter >= 10) {
      break;
    }

    command = input[index++];
  }
  console.log(`${bestPlayer} is the best player!`);
  if (goalsCounter >= 3) {
    console.log(`He has scored ${goalsCounter} goals and made a hat-trick !!!`);
  } else {
    console.log(`He has scored ${goalsCounter} goals.`);
  }
}
bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);
