function shop(input) {
   
    let budget = Number(input[0])
    let gpu = Number(input[1])
    let cpu = Number(input[2])
    let ram = Number(input[3])

    let gpuPrice = gpu * 250
    let cpuPrice = (gpuPrice * 0.35) * cpu
    let ramPrice = (gpuPrice * 0.10 ) * ram
    
    
    let totalSum = gpuPrice + cpuPrice + ramPrice;
  
   
    if(gpu > cpu) {

        totalSum = totalSum * 0.85
        
        
     }

     if(budget >= totalSum) {
       
        let result = budget - totalSum
        console.log(`You have ${result.toFixed(2)} leva left!`)
     }else {
        let result = Math.abs(budget - totalSum)
        console.log(`Not enough money! You need ${result.toFixed(2)} leva more!`)
     }
   



}
shop(["900",
"2",
"1",
"3"])

shop(["920.45",
"3",
"1",
"1"])

