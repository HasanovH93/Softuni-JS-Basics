function foodForPets(input){
    
    let index = 0
    let days = Number(input[index++]);
    let totalFood = Number(input[index++]);
    
    let eatenDogFood = 0;
    let eatenCatFood = 0;
    let bonus = 0;
    let counterDays = 0;
    for(i = 1 ; i <= days ; i++){
       
        let dogFood = Number(input[index++]);
         eatenDogFood += dogFood
        let catFood = Number(input[index++]);
        eatenCatFood += catFood
        counterDays++

        if(counterDays % 3 === 0) {
         bonus =   ( dogFood + catFood ) * 0.10;
        }
       
    }
   bonus = Math.round(bonus);
   console.log(bonus);
    
}
foodForPets([
'3',
'1000',
'300',
'20',
'100',
'30',
'110',
'40'
])