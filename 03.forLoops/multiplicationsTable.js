function multiPlicationsTable(input){

    let num = Number(input[0])


    for(i = 1; i<= 10;i++){
      
        let result = i * num
      
        console.log(`${i} * ${num} = ${result}`)
    }
}

multiPlicationsTable([5])