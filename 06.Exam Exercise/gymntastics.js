function gymntastics(input) {
  let country = input[0];
  let type = input[1];

  let hard = 0;
  let performance = 0;

  if (country === "Russia") {
    switch (type) {
      case "ribbon":
        hard = 9.100;
        performance = 9.400;
        break;
      case "hoop":
        hard = 9.300;
        performance = 9.800;
        break;
      case "rope":
        hard = 9.600;
        performance = 9.000;
        break;
    }
  } else if (country === "Bulgaria") {
    switch (type) {
      case "ribbon":
        hard = 9.600;
        performance = 9.400;
        break;
      case "hoop":
        hard = 9.55;
        performance = 9.750;
        break;
      case "rope":
        hard = 9.500;
        performance = 9.400;
        break;
    }
  }else if (country === "Italy") {
    switch (type) {
      case "ribbon":
        hard = 9.200;
        performance = 9.500;
        break;
      case "hoop":
        hard = 9.450;
        performance = 9.350;
        break;
      case "rope":
        hard = 9.700;
        performance = 9.150;
        break;
    }
}
  let totalPoints = hard + performance;
  console.log(`The team of ${country} get ${totalPoints.toFixed(3)} on ${type}.`);

  let pointsNeeded = 20 - totalPoints
  let percent = pointsNeeded / 20 * 100
  console.log(`${percent.toFixed(2)}%`)
}
gymntastics(["Bulgaria", "ribbon"]);
