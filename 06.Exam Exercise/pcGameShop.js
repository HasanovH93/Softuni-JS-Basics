function pcGameShop(input){

    let index = 0;
    let gameCount = Number(input[index++]);
    let hearthStoneCounter = 0;
    let forniteCounter = 0;
    let overWatchCounter = 0;
    let other = 0;


    for(let i = 0 ; i < gameCount ; i++){
        let name = input[index++];
     if(name === "Hearthstone"){
         hearthStoneCounter++
     }else if(name === "Fornite"){
         forniteCounter++
     }else if(name === "Overwatch"){
         overWatchCounter++
     }else {
         other++
     }
    }
    
    let forniteP = forniteCounter / gameCount * 100;
    let hearthStoneP = hearthStoneCounter / gameCount * 100;
    let overWatchP = overWatchCounter / gameCount * 100;
    let otherP = other / gameCount * 100;

    console.log(`Hearthstone - ${hearthStoneP.toFixed(2)}%`);
    console.log(`Fornite - ${forniteP.toFixed(2)}%`);
    console.log(`Overwatch - ${overWatchP.toFixed(2)}%`);
    console.log(`Others - ${otherP.toFixed(2)}%`);

   

}
pcGameShop(["4",
"Hearthstone",
"Fornite",
"Overwatch",
"Counter-Strike"])
