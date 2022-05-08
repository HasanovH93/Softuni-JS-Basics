function pyramid(input){

    let n = Number(input[0]);
    let printNum =1 ;
    let isFinish = false;
    for(let i = 1; i <= n; i++) {
        let buff = "";
        for(let y = 1; y<=i; y++){
            buff += printNum + ' ';
            printNum++;

            if(printNum > n) {
                isFinish = true;
                break;
            }

        }
        console.log(buff);
        if(isFinish) {
            break;
        }
    }

}

pyramid(["7"]);