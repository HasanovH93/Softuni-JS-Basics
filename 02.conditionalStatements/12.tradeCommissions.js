function commissions(input){

    let city = String(input[0])
    let sales = Number(input[1])

    if(city == "Sofia") {
        if(sales >= 0 && sales <= 500) {
            sales *= 0.05 
        }else if (sales > 500 && sales <= 1000) {
            sales *= 0.07
        }else if (sales > 1000 && sales <= 10000){
            sales *= 0.08
        }else if(sales > 10000) {
            sales *= 0.12
        }
    }else if (city == "Varna") {
        if(sales >= 0 && sales <= 500) {
            sales *= 0.045 
        }else if (sales > 500 && sales <= 1000) {
            sales *= 0.075
        }else if (sales > 1000 && sales <= 10000){
            sales *= 0.10
        }else if(sales > 10000) {
            sales *= 0.13
        }

    }
    else if (city == "Plovdiv") {
        if(sales >= 0 && sales <= 500) {
            sales *= 0.055 
        }else if (sales > 500 && sales <= 1000) {
            sales *= 0.08
        }else if (sales > 1000 && sales <= 10000){
            sales *= 0.12
        }else if(sales > 10000) {
            sales *= 0.145
        }
    }else {console.log("error")
}
console.log(sales.toFixed(2))
    }
    
    
       

    


   

commissions(["SBourgas",
"1500"])



