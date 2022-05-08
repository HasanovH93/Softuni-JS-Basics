function solve(input){

    let countPapers = Number(input[0]);
    let countFabric = Number(input[1]);
    let glueInLiters = Number(input[2]);
    let percentDiscount = Number(input[3]);

    let pricePaper = countPapers * 5.80;
    let priceFabric = countFabric * 7.20;
    let priceGlue = glueInLiters * 1.20;

    let totalPrice = pricePaper + priceFabric + priceGlue;
    let priceWithDiscount = percentDiscount / 100;
    let totalPriceDiscount = totalPrice - (totalPrice * priceWithDiscount);
    console.log(totalPriceDiscount.toFixed(3));

}
solve(["2",
"3",
"2.5",
"25"])
