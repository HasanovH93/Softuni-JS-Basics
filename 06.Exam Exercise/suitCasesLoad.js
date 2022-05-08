function suitCasesLoad(input) {
  let capacity = Number(input.shift())
  let index = 0;
  let counter = 0;

  let command = input.shift()

  while (command !== "End") {
    let suitCase = Number(command);
    index++;

    if (index % 3 === 0) {
      suitCase = suitCase * 1.10;
    }
    if (capacity - suitCase < 0) {
      break;
    }
    counter++;
    capacity -= suitCase;
    command = input.shift();
  }

  if (command === "End") {
    console.log(`Congratulations! All suitcases are loaded!`);
    console.log(`Statistic: ${counter} suitcases loaded.`);
  }else {
    console.log(`No more space!`);
    console.log(`Statistic: ${counter} suitcases loaded.`);
  } 
}
suitCasesLoad(["1200.2", "260", "380.5", "125.6", "305", "End"]);
