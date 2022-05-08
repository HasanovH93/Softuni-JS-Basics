function traveling(input) {

    let index = 0;
    let command = input[index++];

    while(command !== "End"){
        let destination = command;
        let budget = Number(input[index++]);
        let tempSum = 0;
        while(tempSum < budget){
            let money = Number(input[index++]);

            tempSum += money;
        }
        console.log(`Going to ${destination}!`)
        command = input[index++];
    }

}
traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
