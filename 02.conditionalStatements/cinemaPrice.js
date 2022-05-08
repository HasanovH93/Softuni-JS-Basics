function cinemaPrice(input) {

    let projectType = String(input[0])
    let countRows = Number(input[1])
    let countCows = Number(input[2])

    let premierPrice = 12.00
    let normalPrice = 7.50
    let discountPrice = 5.00
    let totalPrice = 0;


    if(projectType == "Premiere") {

       totalPrice = countCows * countRows * premierPrice

      }else if (projectType == "Normal") {
           totalPrice = countCows * countRows * normalPrice
      }else if (projectType == "Discount") {
          totalPrice = countCows * countRows * discountPrice
      }


console.log(totalPrice)

}

cinemaPrice(["Premiere",
"10",
"12"])
