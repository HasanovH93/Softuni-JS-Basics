function highJump(input){
    
    let index = 0;
    let targetHeight = Number(input[index++]);

    let height = targetHeight - 30
    let jumpCounter = 0;
   
    while(height <= targetHeight){
        let isSuccess = false;
    
        for(let i  = 0; i < 3; i++){
            jumpCounter++;

            let curentJump = Number(input[index++]);

            if(curentJump > height){
                isSuccess = true;
                height += 5
                break;

            }
        }
        if(!isSuccess){
            console.log(`Tihomir failed at ${height}cm after ${jumpCounter} jumps.`);
            break;
        }
    }
     if(height > targetHeight){
        console.log(`Tihomir succeeded, he jumped over ${targetHeight}cm after ${jumpCounter} jumps.`);
     }
   
   
   
}

highJump(["231",
"205",
"212",
"213",
"228",
"229",
"230",
"235"])
