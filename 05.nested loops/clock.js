function clock() {

    for(let h = 1; h < 60; h++){
        for(let m = 0; m < 60; m++) {
            console.log(`${h}:${m}`)
        }
    }
}
clock();