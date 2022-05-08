function familyTrip(input) {

    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let priceForNight = Number(input[2]);
    let percentAddCosts = Number(input[3]);
    

    if(nights > 7) {
        priceForNight *= 0.95
       
    }

   let totalNightCosts = nights * priceForNight;
   let addCosts = percentAddCosts * (budget / 100);

   let totalCosts = totalNightCosts + addCosts;


   if(totalCosts <= budget) {
       let moneyLeft = budget - totalCosts;
       console.log(`Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`)
   }else {
       let moneyNeeded = totalCosts - budget;
       console.log(`${moneyNeeded.toFixed(2)} leva needed.`)
   }

   

}

familyTrip(["800.50","8","100","2"]);