function mountainRun(input){
    
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSeconds = Number(input[2]);

    let metersForClimbing = distanceInMeters * timeInSeconds;
    let delay = Math.floor(distanceInMeters / 50) * 30;
    let totalTime = metersForClimbing + delay;
    
    if(totalTime >= recordInSeconds) {
        let neededTime = totalTime - recordInSeconds;
        console.log(`No! He was ${neededTime.toFixed(2)} seconds slower.`);
    }else {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    }
}
mountainRun(["1377",
"389",
"3"])



