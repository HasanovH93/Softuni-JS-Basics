function solve(input) {

    let countStudents = Number(input[0]);
    
    let firstStudents = 0;
    let secondStudents = 0;
    let thirdStudents = 0;
    let failStudents = 0;

    let avg = 0;
    for(let i = 1; i<= countStudents; i++) {

        let currentGrade = Number(input[i]);
        avg += currentGrade 
        
        if(currentGrade >= 5.00){
            firstStudents++
        }else if(currentGrade >= 4.00 && currentGrade < 5.00){
            secondStudents++
          
        }else if(currentGrade >= 3.00 && currentGrade < 4.00){
            thirdStudents++

        }else {
            failStudents++

        }
    }

   let firstGrade = firstStudents / countStudents * 100;
   let secGade = secondStudents / countStudents * 100;
   let thirdGrade = thirdStudents / countStudents * 100;
   let failGrade = failStudents / countStudents * 100;

   console.log(`Top students: ${firstGrade.toFixed(2)}%`)
   console.log(`Between 4.00 and 4.99: ${secGade.toFixed(2)}%`)
   console.log(`Between 3.00 and 3.99: ${thirdGrade.toFixed(2)}%`)
   console.log(`Fail: ${failGrade.toFixed(2)}%`)
   console.log(`Average: ${(avg / countStudents).toFixed(2)}`)

}
solve(["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"])
