function holidayTrip(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let country = "";
  let placeToStay = "";
  let price = 0;

  if (budget <= 100) {
    country = "Bulgaria";
    if (season == "summer") {
      placeToStay = "Camp";
      price = budget * 0.3;
    } else if (season == "winter") {
      placeToStay = "Hotel";
      price = budget * 0.7;
    }
  } else if (budget <= 1000) {
    country = "Balkans";
    if (season == "summer") {
        placeToStay = "Camp"
        price = budget * 0.4
    }else if (season == "winter") {
        placeToStay = "Hotel"
        price = budget * 0.8
    }
  }else if (budget > 1000){
      country = "Europe"
      
        placeToStay = "Hotel"
        price = budget * 0.9
      
      

  }

  console.log(`Somewhere in ${country}`)
  console.log(`${placeToStay} - ${price.toFixed(2)}`)
}

holidayTrip(["678.53", "winter"])