function fishingBoat(input) {

    let budget = Number(input[0])
    let season = input[1]
    let fishermanCount = Number(input[2])
    
    let price = 0;
    let totalPrice = 0;
    if(season == "Spring") {
      
        price = 3000;
    }else if (season == "Summer" || season == "Autumn"){
        price = 4200
    }else if (season == "Winter") {
        price = 2600
    }
    if(fishermanCount <= 6) {

        price = price * 0.90

    }else if(fishermanCount >= 7 && fishermanCount <= 11){
        price = price * 0.85
    }else if (fishermanCount >= 12) {
        price = price * 0.75
    }

    if(fishermanCount % 2 === 0 && season !== "Autumn"){
        price = price * 0.95
    }
   
    if(budget >= price) {
        totalPrice = budget - price
       console.log(`Yes! You have ${totalPrice.toFixed(2)} leva left.`)
    }else if(budget < price) {
        totalPrice = price - budget
        console.log(`Not enough money! You need ${totalPrice.toFixed(2)} leva.`)
    }
}

fishingBoat(["3600",
"Autumn",
"6"])
fishingBoat(["3000",
"Summer",
"11"])
fishingBoat(["2000",
"Winter",
"13"])


