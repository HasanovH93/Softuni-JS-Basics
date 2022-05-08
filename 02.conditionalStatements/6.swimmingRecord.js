function record(input) {

    let recordInSeconds = Number(input[0])
    let distance = Number(input[1])
    let timeInSeconds = Number(input[2])


    let mustSwim = distance * timeInSeconds
    let swimSeconds = Math.floor(distance / 15)
    let totalSeconds = swimSeconds * 12.5
   
    

    let totalTime = mustSwim + totalSeconds

   if(recordInSeconds <= totalTime) {
       
    let neededTime = totalTime - recordInSeconds 
    console.log(`No, he failed! He was ${neededTime.toFixed(2)} seconds slower.`)
   } else {
      
       
       console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
       
   }

   
}
record(["55555.67",
"3017",
"5.03"])

