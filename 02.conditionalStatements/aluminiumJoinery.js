function aluminiumShop(input) {
  let aluCount = Number(input[0]);
  let aluType = input[1];
  let shipMethod = input[2];

  let aluPrice = 0;
 
  
  if (aluType == "90X130") {
    aluPrice = 110 * aluCount;
    if (aluCount > 30 && aluCount < 60) {
      aluPrice = aluPrice - aluPrice * 0.05;
    } else if (aluCount > 60) {
      aluPrice = aluPrice - aluPrice * 0.08;
    }
  } else if (aluType == "100X150") {
    aluPrice = 140 * aluCount;
    if (aluCount > 40 && aluCount < 80) {
      aluPrice = aluPrice - aluPrice * 0.06;
    } else if (aluCount > 80) {
      aluPrice = aluPrice - aluPrice * 0.1;
    }
  } else if (aluType == "130X180") {
    aluPrice = 190 * aluCount;
    if (aluCount > 20 && aluCount < 50) {
      aluPrice = aluPrice - aluPrice * 0.07;
    } else if (aluCount > 50) {
      aluPrice = aluPrice - aluPrice * 0.12;
    }
  } else if (aluType == "130X180") {
    aluPrice = 190 * aluCount;
    if (aluCount > 20 && aluCount < 50) {
      aluPrice = aluPrice - aluPrice * 0.07;
    } else if (aluCount > 50) {
      aluPrice = aluPrice - aluPrice * 0.12;
    }
  }else if (aluType == "200X300") {
    aluPrice = 250 * aluCount;
    if (aluCount > 20 && aluCount < 50) {
      aluPrice = aluPrice - aluPrice * 0.09;
    } else if (aluCount > 50) {
      aluPrice = aluPrice - aluPrice * 0.14;
    }
  } if(shipMethod == "With delivery") {
      aluPrice = aluPrice + 60
  } if(aluCount > 99) {
      aluPrice = aluPrice - aluPrice * 0.04
  }if(aluCount < 10) {
    console.log("Invalid order")

}else {
    console.log(`${aluPrice.toFixed(2)} BGN`)
}

 
}



aluminiumShop(["2", "130X180", "With delivery"]);
