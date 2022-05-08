function solve(input) {

    let currentMoney = Number(input[0]);
    let oneDayProfit = Number(input[1]);
    let costs = Number(input[2]);
    let giftPrice = Number(input[3]);

    let savedMoney = 5 * currentMoney;
    let earnedMoney = 5 * oneDayProfit;
    let totalSavedMoney = savedMoney + earnedMoney;
    
    let withoutCosts = totalSavedMoney - costs;

    if(withoutCosts >= giftPrice){
        console.log(`Profit: ${withoutCosts.toFixed(2)} BGN, the gift has been purchased.`);
    }else {
        let moneyNeeded = giftPrice - withoutCosts;
        console.log(`Insufficient money: ${moneyNeeded.toFixed(2)} BGN.`);
    }



}
solve(["5.12",
"32.05",
"15",
"150"])
