function newHomeFlowersPrice(input) {
  let flowersType = input[0];
  let flowersCount = Number(input[1]);
  let budget = Number(input[2]);

  let price = 0;
  let totalSum = 0;

  switch (flowersType) {
    case "Roses":
      totalSum = 5 * flowersCount;
      if (flowersCount > 80) {
        totalSum = totalSum * 0.9;
      }
      break;
    case "Dahlias":
      totalSum = 3.8 * flowersCount;
      if (flowersCount > 90) {
        totalSum = totalSum * 0.85;
      }
      break;
    case "Tulips":
      totalSum = 2.8 * flowersCount;
      if (flowersCount > 80) {
        totalSum = totalSum * 0.85;
      }
      break;
    case "Narcissus":
      totalSum = 3 * flowersCount;
      if (flowersCount < 120) {
        totalSum = totalSum * 1.15;
      }
      break;
    case "Gladiolus":
      totalSum = 2.5 * flowersCount;
      if (flowersCount < 80) {
        totalSum = totalSum * 1.2;
      }

      break;
  }
  if (budget >= totalSum) {
    let moneyLeft = budget - totalSum;
    console.log(
      `Hey, you have a great garden with ${flowersCount} ${flowersType} and ${moneyLeft.toFixed(
        2
      )} leva left.`
    );
  } else {
    let neededMoney = totalSum - budget;
    console.log(
      `Not enough money, you need ${neededMoney.toFixed(2)} leva more.`
    );
  }
}

newHomeFlowersPrice(["Tulips", "88", "260"]);
newHomeFlowersPrice(["Roses", "55", "250"]);
