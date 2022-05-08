function foodForPets(input){

    let days = Number(input.shift());
    let amountOfFood = Number(input.shift());
    let eatenDogFood = 0;
    let eatencatFood = 0;
    let bonus = 0;
    let counter = 0;

    for(let i = 1; i <= days; i++){

        let dogFood = Number(input.shift());
        eatenDogFood += dogFood;
        let catFood = Number(input.shift());
        eatencatFood += catFood;

        counter ++
        if(counter % 3 === 0) {
           bonus = (catFood + dogFood) * 0.1
        }
        
    }
    bonus = Math.round(bonus);

    
    console.log(`Total eaten biscuits: ${bonus}gr.`);
  console.log(`${(((eatenDogFood + eatencatFood) / amountOfFood) * 100).toFixed(2)}% of the food has been eaten.`);
  console.log(`${((eatenDogFood / (eatenDogFood + eatencatFood)) * 100).toFixed(2)}% eaten from the dog.`);
  console.log(`${((eatencatFood / (eatenDogFood + eatencatFood)) * 100).toFixed(2)}% eaten from the cat.`);

}

foodForPets(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"])
