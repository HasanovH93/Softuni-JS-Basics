function solve(input) {
  let index = 0;
  let capacity = Number(input[index++]);
  let command = input[index++];

  let counter = 0;
 
  let isSpace = true;
  while(command !== "End") {
      counter++;
      let baggVolume = Number(command)
     
      
     if(counter % 3 === 0) {
         baggVolume *= 1.10;
     }
     capacity -= baggVolume;
    if(capacity < 0) {
        counter--
        isSpace = false;
        console.log(`No more space!`);
        console.log(`Statistic: ${counter} suitcases loaded.`)
     break;
    }
      command = input[index++]
  }
  if(isSpace) {
    console.log(`Congratulations! All suitcases are loaded!`);
    console.log(`Statistic: ${counter} suitcases loaded.`)
  
  }
  
}
solve(["700.5",
"180",
"340.6",
"126",
"220"])
