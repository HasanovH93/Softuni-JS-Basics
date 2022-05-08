function movieProfit(input){ 
      
    let filmName = input[0];
    let countDays = Number(input[1]);
    let countTickets = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let profit = Number(input[4]);

    let turnoverForOneDay = countTickets * ticketPrice;
    let allTimeProfit = countDays * turnoverForOneDay;

    let percent = allTimeProfit * profit / 100;

    let totalProfit = allTimeProfit - percent

    console.log(`The profit from the movie ${filmName} is ${totalProfit.toFixed(2)} lv.`)
}

movieProfit(["The Programmer","20","500","7.50","7"])