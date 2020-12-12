function fShop(input) {
  let fruit = input[0].toLowerCase();
  let day = input[1].toLowerCase();
  let quantity = Number(input[2]);
  let price = 0;
  if (day == "saturday" || day == "sunday") {
    if (fruit == "banana") price = 2.7;
    else if (fruit == "apple") price = 1.25;
    else if (fruit == "orange") price = 0.9;
    else if (fruit == "grapefruit") price = 1.6;
    else if (fruit == "kiwi") price = 3.0;
    else if (fruit == "pineapple") price = 5.6;
    else if (fruit == "grapes") price = 4.2;
  } else if (
    day == "monday" ||
    day == "tuesday" ||
    day == "wednesday" ||
    day == "thursday" ||
    day == "friday"
  ) {
    if (fruit == "banana") price = 2.5;
    else if (fruit == "apple") price = 1.2;
    else if (fruit == "orange") price = 0.85;
    else if (fruit == "grapefruit") price = 1.45;
    else if (fruit == "kiwi") price = 2.7;
    else if (fruit == "pineapple") price = 5.5;
    else if (fruit == "grapes") price = 3.85;
  }
  if (price > 0) {
    console.log((price * quantity).toFixed(2));
  } else {
    console.log("error");
  }
}

fShop(["apple", "Tuesday", "2"]);
