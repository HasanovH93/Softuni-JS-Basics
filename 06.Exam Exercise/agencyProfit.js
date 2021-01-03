function agencyProfit(input) {
  let name = input.shift();
  let totalAdultsTicket = Number(input.shift());
  let totalKidsTicket = Number(input.shift());
  let ticketPrice = Number(input.shift());
  let serviceTax = Number(input.shift());

  let kidsDiscount = ticketPrice * 0.3;

  let AdultsService = ticketPrice + serviceTax;
  let kidsService = kidsDiscount + serviceTax;

  let totalPrice =
    totalKidsTicket * kidsService + totalAdultsTicket * AdultsService;

  let profit = totalPrice * 0.2;

  console.log(
    `The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`
  );
}
agencyProfit(["WizzAir", "15", "5", "120", "40"]);
