function evenPowersOf2([input]) {
  let n = parseInt(input);

  for (let i = 0; i <= n; i += 2) {
    let result = Math.pow(2, i);
    console.log(result);
  }
}

evenPowersOf2([6]);
