function solve(count){
    
    let numForPRint = 1;
    let sum = 0;
    for(let i = 1; i <= count; i++){ 

        console.log(numForPRint);
        sum += numForPRint
        numForPRint+= 2
        
    }
    console.log(sum)
}
solve(5)