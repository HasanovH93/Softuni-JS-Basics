function income(input) {
  let avioAgency = input[0];
  let ticketCountAdults = Number(input[1]);
  let ticketCountKids = Number(input[2]);
  let netTicketPriceAdults = Number(input[3]);
  let serivePrice = Number(input[4]);

  let netTicketPriceKids = netTicketPriceAdults * 0.3;

  let totalAdultsPrice = netTicketPriceAdults + serivePrice;

  let totalKidsPrice = netTicketPriceKids + serivePrice;

  let totalTicketsPrice =
    ticketCountKids * totalKidsPrice + ticketCountAdults * totalAdultsPrice;

  let profit = totalTicketsPrice * 0.2;

  console.log(
    `The profit of your agency from ${avioAgency} tickets is ${profit.toFixed(
      2
    )} lv.`
  );
}

income(["WizzAir", "15", "5", "120", "40"]);
