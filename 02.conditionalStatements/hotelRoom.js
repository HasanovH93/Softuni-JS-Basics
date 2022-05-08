function hotelRoomPrice(input) {
    let month = input[0]
    let countNights = Number(input[1])

    let apartmentPrice = 0;
    let studioPrice = 0;

    if(month == "May" || month == "October") {
        studioPrice = 50
        apartmentPrice = 65
        if(countNights > 14) {
            studioPrice = studioPrice * 0.70
          
        }else if(countNights > 7) {
            studioPrice = studioPrice * 0.95
        }
    }else if(month == "June" || month == "September") {
        studioPrice = 75.20
        apartmentPrice = 68.70
        if(countNights > 14) {

            studioPrice = studioPrice * 0.80
            
        }
    }else if(month == "July" || month == "August") {
        studioPrice = 76
        apartmentPrice = 77
       
    }
    if(countNights > 14){
        apartmentPrice = apartmentPrice * 0.90
    }
    
    let totalPriceStudio = countNights * studioPrice
    let totalPriceApartment = countNights * apartmentPrice

    console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`)

}

hotelRoomPrice(["May",
"15"])
