function barcodeGeneator(input) {
  let startNum = input[0];
  let endNum = input[1];
 

  let firstStartNum = startNum[0];
  let secSTartNum = startNum[1];
  let thirdStartNum = startNum[2];
  let fourthStartNum = startNum[3];

  let firstEndNum = endNum[0];
  let secEndNum =   endNum[1];
  let thirdEndNum = endNum[2];
  let fourthEndNum = endNum[3];

  let buff = "";
  for (let i = firstStartNum; i <= firstEndNum; i++) {
    for (let j = secSTartNum; j <= secEndNum; j++) {
      for (let k = thirdStartNum; k <= thirdEndNum; k++) {
        for (let l = fourthStartNum; l <= fourthEndNum; l++) {

           if(i % 2 == 1 && j % 2 == 1 && l % 2 == 1 && k % 2 == 1) {
                  
            buff += `${i}${j}${k}${l} `
           
           }
            
            
        }
      }
    }
  }
  console.log(buff)
}
barcodeGeneator(["2345", "6789"]);
