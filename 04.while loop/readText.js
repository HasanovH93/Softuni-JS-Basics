function readText(input) {
  let sum = 0;
  let index = 0;
  let n = Number(input[index++]);

  while (sum < n) {
    num = Number(input[index++]);
    sum += num;
  }
  console.log(sum);
}

readText(["100", "10", "20", "30", "40"]);
