function aluminiumJoinery(input) {
  let countAluminium = Number(input[0]);
  let size = input[1];
  let deliveryType = input[2];

  let price = 0;
  let discount = 0;

  if (size === "90X130") {
    price = 110;
    if (countAluminium > 60) {
      discount = 0.92;
    } else if (countAluminium > 30) {
      discount = 0.95;
    }
  } else if (size === "100X150") {
    price = 140;
    if (countAluminium > 80) {
      discount = 0.9;
    } else if (countAluminium > 40) {
      discount = 0.94;
    }
  } else if (size === "130X180") {
    price = 190;
    if (countAluminium > 50) {
      discount = 0.88;
    } else if (countAluminium > 20) {
      discount = 0.93;
    }
  } else if (size === "200X300") {
    price = 250;
    if (countAluminium > 50) {
      discount = 0.86;
    } else if (countAluminium > 25) {
      discount = 0.93;
    }
  }
  let totalPrice = price * discount * countAluminium;
  if (deliveryType === "With delivery") {
    totalPrice += 60;
  }

  if (countAluminium > 99) {
    totalPrice *= 0.96;
  }

  if (countAluminium < 10) {
    console.log("Invalid order");
  } else {
    console.log(`${totalPrice.toFixed(2)} BGN`);
  }
}

aluminiumJoinery(["2", "130X180", "With delivery"]);
