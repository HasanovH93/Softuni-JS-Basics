function touristShop(input) {
  let index = 0;
  let budget = Number(input[index++]);
  let command = input[index++];

  let totalSpend = 0;
  let productCounter = 0;
  let isMoney = true;

  while (command !== "Stop") {
    productCounter++;
    let product = command;
    let price = Number(input[index++]);

    if (productCounter % 3 === 0) {
      price /= 2;
    }

    totalSpend += price;
    if (totalSpend > budget) {
      isMoney = false;
      let moneyNeeded = totalSpend - budget;
      console.log(`You don't have enough money!`);
      console.log(`You need ${moneyNeeded.toFixed(2)} leva!`);
      break;
    }
    command = input[index++];
  }

  if (isMoney) {
    console.log(
      `You bought ${productCounter} products for ${totalSpend.toFixed(2)} leva.`
    );
  }
}

touristShop([
  "153.20",
  "Backpack",
  "25.20",
  "Shoes",
  "54",
  "Sunglasses",
  "30",
  "Stop",
]);

touristShop(["54", "hermal underwear", "24", "unscreen", "45", "Stop"]);
