function catWalking(input){
     
    let minutesWalking = Number(input[0]);
    let countWalkings = Number(input[1]);
    let caloriesConsumed = Number(input[2]);

    let totalWalkingTime = minutesWalking * countWalkings;

    let caloriesBurned = totalWalkingTime * 5;
   
    if(caloriesBurned < caloriesConsumed / 2) {
       console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`)
    }else {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`)
    }

}

catWalking(["15",
"2",
"500"])