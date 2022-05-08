function extraBaggage(input) {
  let priceForBag = Number(input[0]);
  let bagWeight = Number(input[1]);
  let daysToTravel = Number(input[2]);
  let countBags = Number(input[3]);
  let taxForBag = 0;
  let totalPrice = 0;

  if (bagWeight < 10) {
    taxForBag = priceForBag * 0.2;
  } else if (bagWeight <= 20) {
    taxForBag = priceForBag * 0.5;
  } else if (bagWeight > 20) {
    taxForBag = priceForBag;
  }

  if (daysToTravel > 30) {
    totalPrice = taxForBag * 1.1;
  } else if (daysToTravel >= 7) {
    totalPrice = taxForBag * 1.15;
  } else if (daysToTravel < 7) {
    totalPrice = taxForBag * 1.4;
  }
  let totalBagPrice = totalPrice * countBags;
  console.log(`The total price of bags is: ${totalBagPrice.toFixed(2)} lv.`);
}

extraBaggage(["30", "18", "15", "2"]);
extraBaggage(["63.80", "23", "3", "1"]);
extraBaggage(["25.50", "5", "36", "6"]);
