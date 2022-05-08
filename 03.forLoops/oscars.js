function oscars(input){
    
    let name = input[0];
    let startPoints = Number(input[1])
    let inputL = input.length
  
   let points = 0;
    for(let i = 3; i< inputL; i++){
       if(i % 2 !== 0) {
          points = i + 1;
           let total = input[i].length * Number(input[points] / 2)
           startPoints += total
           

         
       }
       if(startPoints> 1250.5){
           break;
       }
    }
       if(startPoints < 1250.5){

        let pointsNeeded = 1250.5 - startPoints;
        console.log(`Sorry, ${name} you need ${pointsNeeded.toFixed(1)} more!`)
       }else {
           console.log(`Congratulations, ${name} got a nominee for leading role with ${startPoints.toFixed(1)}!`)
       }
    }
  


oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
