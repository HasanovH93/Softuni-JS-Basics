function cinemaTickets(input) {

    let index = 0;
    let command = input[index++];

    let studentCount = 0;
    let standardCount = 0;
    let kidsCount = 0;

    let ticketCounter = 0;

    while(command !== "Finish"){
        let name = command;
        let freeSpace = Number(input[index++]);

        let type = input[index++];
        let tempTicketCounter = 0;

        while(type !== "End") {
            
            switch(type) {
                case "student": studentCount++;break;
                case "standard": standardCount++;break;
                case "kid": kidsCount++;break;
               
            }
            tempTicketCounter++;

            if(tempTicketCounter >= freeSpace) {
                break;
            }

            type = input[index++];
        }
        let capacity = tempTicketCounter / freeSpace * 100;
        ticketCounter += tempTicketCounter
        console.log(`${name} - ${capacity.toFixed(2)}% full.`);

        command = input[index++];

    }
    let student = studentCount / ticketCounter * 100;
    let standard = standardCount / ticketCounter * 100;
    let kids = kidsCount / ticketCounter * 100;
    console.log(`Total tickets: ${ticketCounter}`);

    console.log(`${student.toFixed(2)}% student tickets.`);
    console.log(`${standard.toFixed(2)}% standard tickets.`);
    console.log(`${kids.toFixed(2)}% kids tickets.`);


}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
