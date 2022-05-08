function christmasTournament(input){

    let index = 0;
    let days = input[index++];
    let money = 0;
    let countWin = 0;
    let countLose = 0;
    
    for(let i = 1; i <= days; i++){
        let command = input[index++];
        let tempMoney= 0;
        let win = 0;
        let lose = 0
        while(command !== "Finish"){
             let sport = command;
             let score = input[index++];

             if(score === "win"){
                 win++
                 tempMoney += 20
             }else {
                 lose++
             }
           
            command = input[index++]
        }
        if(win > lose){
            tempMoney *= 1.10
            countWin++
        }else{
            countLose++
        }
        
        money += tempMoney
       
    }
    if(countWin > countLose){
        money *= 1.20
        console.log(`You won the tournament! Total raised money: ${money.toFixed(2)}`)
    }else {
        console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`)
    }
        
}
christmasTournament(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])