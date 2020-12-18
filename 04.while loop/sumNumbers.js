function sumNumbers(input) {
  let index = 0;
  let n = Number(input[index++]);

  let sum = 0;

  while (sum < n) {
    let num = Number(input[index++]);
    sum += num;
  }
  console.log(sum);
}
sumNumbers([100, 10, 20, 30, 40]);
