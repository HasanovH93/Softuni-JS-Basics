function movie(input) {
  let budget = Number(input.shift());
  let staff = Number(input.shift());
  let clothesPriceForOne = Number(input.shift());

  let decor = budget * 0.1;
  let totalPriceClothes = staff * clothesPriceForOne;

  if (staff > 150) {
    totalPriceClothes = totalPriceClothes - totalPriceClothes * 0.1;
  }

  let totalPrice = decor + totalPriceClothes;

  let totalBudget = Math.abs(budget - totalPrice);

  if (totalPrice > budget) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${totalBudget.toFixed(2)} leva more.`);
  } else {
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${totalBudget.toFixed(2)} leva left.`
    );
  }
}

movie(["20000", "120", "55.5"]);

movie(["9587.88", "222", "55.68"]);
