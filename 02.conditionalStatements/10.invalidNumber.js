function invNumber(input) {
  let num = Number(input);
  if ((num < 100 || num > 200) && num !== 0) {
    console.log("invalid");
  }
}
invNumber([0]);
