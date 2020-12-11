function password(input) {
  let index = 0;
  let name = input[index++];
  let pass = input[index++];

  let tempPassword = input[index++];
  while (tempPassword !== pass) {
    tempPassword = input[index++];
  }
  console.log(`Welcome ${name}!`);
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);
