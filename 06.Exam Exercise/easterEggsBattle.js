function easterEggsBattle(input){


    let index = 0;
    let eggsPlayerOne = Number(input[index++]);
    let eggsPlayerTwo = Number(input[index++]);

    let command = input[index++];
    let isEggs = true;
    while(command !== "End") {
        let winner = command;
       if(winner === "one") {
           eggsPlayerTwo-- ;
       }else {
           eggsPlayerOne-- ;
       }
       if(eggsPlayerOne === 0) {
           isEggs = false;
        console.log(`Player one is out of eggs. Player two has ${eggsPlayerTwo} eggs left.`);
        break;
    }else if(eggsPlayerTwo === 0) {
        isEggs = false;
        console.log(`Player two is out of eggs. Player one has ${eggsPlayerOne} eggs left.`);
        break;
    }
       command = input[index++];
    }
    if(isEggs) {
        console.log(`Player one has ${eggsPlayerOne} eggs left.`);
        console.log(`Player two has ${eggsPlayerTwo} eggs left.`);
    }
  
    
}


easterEggsBattle([
"2",
"6",
"one",
"two",
"two"
])