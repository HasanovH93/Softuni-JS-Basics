function divisibleBy9(input) {
  let m = Number(input[0]);
  let n = Number(input[1]);
  let printNumber = "";
  let result = 0;
  for (let i = m; i <= n; i++) {
    if (i % 9 == 0) {
      result += i;
      printNumber += `${i}\n`;
    }
  }
  console.log(`The sum: ${result}`);
  console.log(printNumber);
}
divisibleBy9([100, 200])
