function launch(input) {
  let movieName = input[0];
  let movieTime = Number(input[1]);
  let breakTime = Number(input[2]);

  let launchTime = (breakTime * 1) / 8;
  let chillTime = (breakTime * 1) / 4;
  let restTime = breakTime - launchTime - chillTime;

  if (restTime >= movieTime) {
    let timeLeft = restTime - movieTime;
    console.log(
      `You have enough time to watch ${movieName} and left with ${timeLeft} minutes free time.`
    );
  } else {
    let timeNeeded = Math.abs(restTime - movieTime);
    console.log(
      `You don't have enough time to watch ${movieName}, you need ${Math.ceil(
        timeNeeded
      )} more minutes.`
    );
  }
}

launch(["Game of Thrones", "60", "96"]);

launch(["Teen Wolf", "48", "60"]);
