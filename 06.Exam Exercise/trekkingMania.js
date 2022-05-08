function trekkingMania(input) {

    let sum = 0;
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    

    
    let inputL = input.length;

    for(i= 1; i < inputL; i++) {
        let climbers = Number(input[i])
        sum += climbers
        if(climbers <= 5){
            musala += climbers
            
        }else if(climbers <= 12){
            monblan += climbers
        }else if(climbers <= 25){
            kilimandjaro += climbers
        }else if(climbers <= 40){
            k2 += climbers
        }else if(climbers >= 41){
            everest += climbers
        }
      
    }
    let musalaClimbers = (musala / sum) * 100;
    let monblanClimbers = (monblan / sum) * 100;
    let kilmanClimbers = (kilimandjaro / sum) * 100;
    let k2Climbers = (k2 / sum) * 100;
    let everestClimbers = (everest / sum) * 100;

    console.log(`${musalaClimbers.toFixed(2)}%`);
    console.log(`${monblanClimbers.toFixed(2)}%`);
    console.log(`${kilmanClimbers.toFixed(2)}%`);
    console.log(`${k2Climbers.toFixed(2)}%`);
    console.log(`${everestClimbers.toFixed(2)}%`);
   
 


}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
