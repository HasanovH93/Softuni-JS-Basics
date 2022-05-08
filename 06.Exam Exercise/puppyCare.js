function puppyCare(input){
  
    let boughtFood = Number(input[0]) * 1000;
    
    let eatenFood = 0;
    let index = 1
    let command = (input[index++]);

    while(command !== "Adopted") {
        let food = Number(command);
        eatenFood += food
        command = input[index++];


    }
  if(eatenFood <= boughtFood){
      console.log(`Food is enough! Leftovers: ${boughtFood - eatenFood} grams.`);
  }else {
      console.log(`Food is not enough. You need ${eatenFood - boughtFood} grams more.`);
  }
}
puppyCare(["3",
"1000",
"1000",
"1000",
"Adopted"])
