function shop(input){

    let excursionPrice = Number(input[0])
    let puzzel = Number(input[1])
    let dolls = Number(input[2])
    let bears = Number(input[3])
    let minions = Number(input[4])
    let trucks = Number(input[5])

    let puzzelPrice = puzzel * 2.60
    let dollsPrice = dolls * 3
    let bearsPrice = bears * 4.10
    let minionsPrice = minions * 8.20
    let trucksPrice = trucks * 2

   

    let totalPrice = puzzelPrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice
    let totalToysCount = puzzel + dolls + bears + minions + trucks

    let discount= 0;
    let price = 0;
    let rent = 0;
    let profit = 0;

    if(totalToysCount >= 50) {
         
        discount = totalPrice * 0.75
        price = totalPrice - discount
        rent = price * 0.9
        profit = price - rent;
        
    }else {
        rent = totalPrice * 0.10
        profit = totalPrice - rent;
        

    }
    if(price >= excursionPrice) {
        let result = profit - excursionPrice
        console.log(`Yes! ${result.toFixed(2)} lv left.`)
    }else {
        let result = excursionPrice - profit
        console.log(`Not enough money! ${result.toFixed(2)} lv needed.`)
    }
}


