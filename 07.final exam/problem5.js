function solve(input) {
  let index = 0;
  let command = input[index++];
  let baseLager = 5364;
  let target = 8848;
  let days = 1;

  while (command !== "END") {
    let sleep = command;
    let height = Number(input[index++]);

    if (sleep === "Yes") {
      days += 1;
    }
    if (days > 5 ) {
      console.log("Failed!");
      console.log(baseLager);
      baseLager += height;
      break;
    }

    baseLager += height;
    if (baseLager >= target) {
      console.log(`Goal reached for ${days} days!`);
      break;
    }

    command = input[index++];
  }
  if(command === "END") {
    console.log("Failed!");
    console.log(baseLager);
}

}
solve(["Yes",
"535",
"Yes",
"849",
"Yes",
"499",
"Yes",
"400",
"Yes",
"500"])
