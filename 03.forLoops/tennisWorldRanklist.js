function worldRanklist(input) {
  let countTournamets = Number(input[0]);
  let startPoints = Number(input[1]);

  let inputL = input.length;
  let points = startPoints;
  let wins = 0;
  for (i = 2; i < inputL; i++) {
    let tourStage = input[i];
    switch (tourStage) {
      case "W":
        points += 2000;
        wins++;
        break;
      case "F":
        points += 1200;
        break;
      case "SF":
        points += 720;
        break;

      default:
        break;
    }
  }

  let average = (points - startPoints) / countTournamets;

  console.log(`Final points: ${points}`);
  console.log(`Average points: ${Math.floor(average)}`);

  let percentWins = (wins / countTournamets) * 100;
  console.log(`${percentWins.toFixed(2)}%`);
}

worldRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
