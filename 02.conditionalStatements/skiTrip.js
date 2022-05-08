function skiTripPrice(input) {

    let daysToStay = Number(input[0])
    let roomType = input[1]
    let review =  input[2]

    let roomPrice = 0;
    let nightsToStay = daysToStay - 1
    
    if(roomType == "room for one person") {
        
        roomPrice = 18.00 * nightsToStay
    }else if (roomType == "apartment") {
        roomPrice = nightsToStay * 25
        if(nightsToStay < 10) {
            roomPrice = roomPrice * 0.70
           
        }else if (nightsToStay <= 15) {
            roomPrice = roomPrice * 0.65
        }else if(nightsToStay > 15){
            roomPrice = roomPrice * 0.50
        }
    }else if (roomType == "president apartment"){
        roomPrice = 35.00 * nightsToStay
        if(nightsToStay < 10) {
            roomPrice = roomPrice * 0.90
           
        }else if (nightsToStay <= 15) {
            roomPrice = roomPrice * 0.85
        }else if(nightsToStay > 15){
            roomPrice = roomPrice * 0.80
        }
    }
    if(review == "positive") {
        roomPrice = roomPrice * 1.25
       
    }else if (review == "negative") {
        roomPrice = roomPrice * 0.90
       
    }
    console.log(roomPrice.toFixed(2))
    
}

skiTripPrice(["14",
"apartment",
"positive"])

skiTripPrice(["30",
"president apartment",
"negative"])

