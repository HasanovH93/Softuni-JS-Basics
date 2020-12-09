function time(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);

  let mins = minutes + 15;

  if (mins > 59) {
    hours++;
    mins -= 60;
  }
  if (hours > 23) {
    hours = 0;
  }
  if (mins < 10) {
    console.log(`${hours}:0${mins}`);
  } else {
    console.log(`${hours}:${mins}`);
  }
}

time([1, 46]);
