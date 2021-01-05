function balls(input) {
  let ballsCount = Number(input[1]);

  let points = 0;
  let inputL = input.length;
  let red = 0;
  let orange = 0;
  let yellow = 0;
  let white = 0;
  let black = 0;
  let otherColors = 0;

  for (let i = 1; i < inputL; i++) {
    let color = input[i];

    switch (color) {
      case "red":
        red++;
        points += 5;
        break;
      case "orange":
        orange++;
        points += 10;
        break;
      case "yellow":
        yellow++;
        points += 15;
        break;
      case "white":
        white++;
        points += 20;
        break;
      case "black":
        black++;
        points /= 2;
        break;

      default:
        otherColors++;
        break;
    }
  }
  let totalPoints = Math.floor(points);
  console.log(`Total points: ${totalPoints}`);
  console.log(`Red balls: ${red}`);
  console.log(`Orange balls: ${orange}`);
  console.log(`Yellow balls: ${yellow}`);
  console.log(`White balls: ${white}`);
  console.log(`Other colors picked: ${otherColors}`);
  console.log(`Divides from black balls: ${black}`);
}
balls([
  "10",
  "white",
  "white",
  "ee",
  "red",
  "orange",
  "red",
  "black",
  "black",
  "black",
  "black",
]);
