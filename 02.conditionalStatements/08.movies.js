function moviesPrice(input) {
  let day = String(input);
  let price = 0;

  switch (day) {
    case "Monday":
      price = 12;
      break;
    case "Tuesday":
      price = 12;
      break;
    case "Wednesday":
      price = 14;
      break;
    case "Thursday":
      price = 14;
      break;
    case "Friday":
      price = 12;
      break;
    case "Saturday":
      price = 16;
      break;
    case "Sunday":
      price = 16;
      break;

    default:
      break;
  }
  console.log(price);
}
moviesPrice(["Sunday"]);
