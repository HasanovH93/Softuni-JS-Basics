function equalSumsEvenOddPosition(input) {
  let firstNum = Number(input.shift());
  let secNum = Number(input.shift());
  let printLine = "";
  for (let i = firstNum; i <= secNum; i++) {
    let currentNum = "" + i;
    let oddSum = 0;
    let evenSum = 0;
    for (let j = 0; j <= currentNum.length; j++) {
      let currentDigit = Number(currentNum.charAt(j));

      if (j % 2 === 0) {
        evenSum += currentDigit;
      } else if (j % 2 === 1) {
        oddSum += currentDigit;
      }
    }
    if (oddSum === evenSum) {
      printLine += `${i} `;
    }
  }
  console.log(printLine);
}
equalSumsEvenOddPosition(["100000", "100050"]);
