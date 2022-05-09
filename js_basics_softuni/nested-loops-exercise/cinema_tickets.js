function cinemaTickets(input) {
  let movieName = input[0];
  let totalTickets = 0;
  let studentTickets = 0;
  let standardTickets = 0;
  let kidTickets = 0;
  let index = 1;

  while (movieName !== "Finish") {
    let freeSeats = Number(input[index]);
    index++;
    let totalSeats = freeSeats;
    let soldTickets = 0;

    while (freeSeats > 0) {
      let ticketType = input[index];
      index++;
      if (ticketType === "End") {
        break;
      } else if (ticketType === "student") {
        studentTickets += 1;
      } else if (ticketType === "standard") {
        standardTickets += 1;
      } else if (ticketType === "kid") {
        kidTickets += 1;
      }
      freeSeats -= 1;
      totalTickets += 1;
      soldTickets += 1;
    }
    console.log(
      `${movieName} - ${((soldTickets / totalSeats) * 100).toFixed(2)}% full.`
    );
    movieName = input[index];
    index++;
  }

  console.log(`Total tickets: ${totalTickets}`);
  console.log(
    `${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`
  );
  console.log(
    `${((standardTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`
  );
  console.log(
    `${((kidTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`
  );
}

cinemaTickets([
  "Taxi",
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
  "Finish",
]);
