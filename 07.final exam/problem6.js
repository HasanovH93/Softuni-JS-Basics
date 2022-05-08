function solve(input) {
     
    let upperLimitFirstNumber = Number(input[0]);
    let upperLimitSecondNumber = Number(input[1]);
    let upperLimitThirdNumber = Number(input[2]);
    
    for(let i = 2; i<=upperLimitFirstNumber; i+=2) {
        for(j = 2; j<=upperLimitSecondNumber; j++) {
            for(let k = 2; k<= upperLimitThirdNumber; k+=2) {

                
                    if( j == 2 || j == 3 || j == 5 || j == 7) {
                        
                        console.log(`${i} ${j} ${k}`)
                    }
                    
               
            }
        }
    }

}
solve(["3",
"5",
"5"])