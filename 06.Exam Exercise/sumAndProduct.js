function sumAndProduct(input){

    let n = Number(input[0])

    for(let a = 1; a< 9; a++){
        for(let b = 9; b>a; a--){
            for(let c = 1; c< 9; c++){
                for(let d = 9; d>c; d--){
                    let sum = a + b + c + d;
                    let multyply = a * b * c * d;
                    if(sum === multyply && n % 10 === 5){
                        console.log(`${a}${b}${c}${d}`)
                        return;
                    }else if(Math.floor(multyply / sum) === 3 && n % 3 ===0){
                        console.log(`${d}${c}${b}${a}`)
                        return;
                    }
                }
            }
        }
    }
    console.log(`Not Found`)
}
sumAndProduct(["123"])