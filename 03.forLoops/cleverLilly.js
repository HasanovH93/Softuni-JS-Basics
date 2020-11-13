function cleverLilly(input) {
  let age = Number(input[0]);
  let washmashinePrice = Number(input[1]);
  let singleToyPrice = Number(input[2]);

  let toysCounter = 0;
  let savedMoney = 0;
  let stolenMoney = 0;
  let addedMoney = 10;

  for (i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      savedMoney += addedMoney;
      stolenMoney++;
      addedMoney += 10;
    } else {
      toysCounter++;
    }
  }
  let savedMoneyfromToys = toysCounter * singleToyPrice;
  let totalSavedMoney = savedMoney + savedMoneyfromToys - stolenMoney;
  if (totalSavedMoney >= washmashinePrice) {
    let moneyLeft = totalSavedMoney - washmashinePrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
  } else {
    let moneyNeeded = washmashinePrice - totalSavedMoney;
    console.log(`No! ${moneyNeeded.toFixed(2)}`);
  }
}
cleverLilly(["21", "1570.98", "3"]);
