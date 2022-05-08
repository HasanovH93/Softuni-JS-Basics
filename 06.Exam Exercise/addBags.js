function addBags(input) {
  let baggagePrice = Number(input[0]);
  let kilos = Number(input[1]);
  let daysToDeparture = Number(input[2]);
  let countBags = Number(input[3]);

  let totalPrice = 0;

  if (kilos < 10) {
    totalPrice = baggagePrice * 0.2;
  } else if (kilos <= 20) {
    totalPrice = baggagePrice * 0.5;
  } else if (kilos > 20) {
    totalPrice = Number(input[0]);
  }

  if (daysToDeparture > 30) {
    totalPrice = totalPrice * 1.1;
  } else if (daysToDeparture >= 7) {
    totalPrice = totalPrice * 1.15;
  } else if (daysToDeparture < 7) {
    totalPrice = totalPrice * 1.4;
  }

  console.log(
    `The total price of bags is: ${(totalPrice * countBags).toFixed(2)} lv.`
  );
}
addBags(["25.50", "5", "36", "6"]);
