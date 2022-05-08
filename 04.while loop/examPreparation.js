function examPreparation(input) {
  let index = 0;
  let negativeGrade = Number(input[index++]);

  let command = input[index++];
  let counter = 0;
  let sumGrade = 0;
  let problemsCounter = 0;
  let name = ''
  let needBreak = false;
  while (command !== "Enough") {
      problemsCounter++;
     name = command;
    let grade = Number(input[index++]);
    if (grade <= 4.0) {
        
      counter++;
      
  }
  if (counter >= negativeGrade) {
      needBreak = true;
    console.log(`You need a break, ${counter} poor grades.`);
    break;
  }
  sumGrade += grade;
  command = input[index++];
  
    }
    if(!needBreak) {
        let avgGrade = sumGrade / problemsCounter;
    console.log(`Average score: ${avgGrade.toFixed(2)}`);
    console.log(`Number of problems: ${problemsCounter}`);
    console.log(`Last problem: ${name}`)

    }
    

}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])

