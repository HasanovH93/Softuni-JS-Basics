function sumOfTwoNumbers(input){

    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let num1 = 0;
    let num2 = 0;
    
    let isFound = false;
    let combinations = 0;
    for(let a = startNumber; a <= endNumber; a++){
        for(let b = startNumber; b <= endNumber; b++){
            combinations++;
           if(a + b === magicNumber) {
               num1=a;
               num2=b;
               isFound = true;
               break;
           }
        }
        if(isFound){
            break;
        }
    }
    if(isFound){
        console.log(`Combination N:${combinations} (${num1} + ${num2} = ${magicNumber})`);
    }else {
        console.log(`${combinations} combinations - neither equals ${magicNumber}`)
    }

}

sumOfTwoNumbers(["23",
"24",
"20"])

