function titles(input) {
  let years = Number(input[0]);
  let sex = String(input[1]);

  if (sex == "f") {
    if (years >= 16) {
      console.log("Ms.");
    } else {
      console.log("Miss");
    }
  } else {
    if (sex == "m") {
      if (years >= 16) {
        console.log("Mr.");
      } else {
        console.log("Master");
      }
    }
  }
}
titles([12, "f"]);
