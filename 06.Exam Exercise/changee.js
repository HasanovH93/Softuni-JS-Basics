function change(input){
     
    let bitcoin = Number(input[0]);
    let yuan = Number(input[1]);
    let commisionPercent = Number(input[2]);
    
    commisionPercent = commisionPercent * 0.01;
    let allInEuro = (yuan * 0.15 * 1.76 + bitcoin * 1168) / 1.95;
    let charge = allInEuro * commisionPercent;
    let total = allInEuro - charge;
    console.log(total.toFixed(2));
   

    

}

change(["1",
"5",
"5"])