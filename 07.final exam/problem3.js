function solve(input) {

    let countPeople = Number(input[0]);
    let season = input[1];
    let price = 0;
    if(countPeople <= 5) {
        switch(season) {
            case "spring":
                price = countPeople * 50;
                break;
            case "summer":
                price = countPeople * 48.50;
                price = price * 0.85
                break;
            case "autumn":
            price = countPeople * 60;
            break;
            case "winter":
                price = countPeople * 86
                price = price * 1.08
                break;
        }

    }else {
        switch(season) {
            case "spring":
                price = countPeople * 48;
                break;
            case "summer":
                price = countPeople * 45
                price = price * 0.85
                break;
            case "autumn":
            price = countPeople * 49.50;
            break;
            case "winter":
                price = countPeople * 85
                
                price = price * 1.08
                break;
        }

    }
  console.log(`${price.toFixed(2)} leva.`)

}
solve(["20",
"winter"])