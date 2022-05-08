function vetParkig(input) {
  let countDays = Number(input.shift());
  let countHours = Number(input.shift());

  let totalPrice = 0;

  for (let i = 1; i <= countDays; i++) {
    let dailyCost = 0;
    for (let j = 1; j <= countHours; j++) {
      if (i % 2 === 0 && j % 2 === 1) {
        dailyCost += 2.5;
      } else if (i % 2 === 1 && j % 2 === 0) {
        dailyCost += 1.25;
      } else {
        dailyCost += 1;
      }
    }
    totalPrice += dailyCost;
    console.log(`Day: ${i} - ${dailyCost.toFixed(2)} leva`);
  }

  console.log(`Total: ${totalPrice.toFixed(2)} leva`);
}
vetParkig(["2", "5"]);
