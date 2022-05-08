function trainTheTrainers(input) {
    let index = 0;
    let numberOfEvaluators = Number(input[index++]);
    
    let command = input[index++];
    let counter = 0;
    let sumGrades = 0;

    while(command !== "Finish") {
        let presentationName = command;
        counter++
        let sumTempGrade = 0;

        for(let i = 0; i < numberOfEvaluators; i++) {
            let grade = Number(input[index++]);
            sumTempGrade += grade
        }
        let tempAvgGrade = sumTempGrade / numberOfEvaluators;
        console.log(`${presentationName} - ${tempAvgGrade.toFixed(2)}.`)
        sumGrades += tempAvgGrade
        
        command = input[index++]

    }
    let sumAvgGrades = sumGrades / counter;
    console.log(`Student's final assessment is ${sumAvgGrades.toFixed(2)}.`)

}

trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
