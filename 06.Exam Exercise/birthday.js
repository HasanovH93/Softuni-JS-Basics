function birthday(input){
    let rent = Number(input)

    let cake = rent * 0.20;
    let drinks = cake - cake * 0.45;
    let animators = rent / 3;

    let sum = cake + drinks + animators + rent;
    console.log(sum)
}
birthday(2250)