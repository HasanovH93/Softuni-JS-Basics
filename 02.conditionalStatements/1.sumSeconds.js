function sumSec(input) {
  let sec1 = Number(input[0]);
  let sec2 = Number(input[1]);
  let sec3 = Number(input[2]);

  let result = sec1 + sec2 + sec3;

  let mins = Math.floor(result / 60);
  let secs = result % 60;

  if (secs < 10) {
    console.log(`${mins}:0${secs}`);
  } else {
    console.log(`${mins}:${secs}`);
  }
}

sumSec([50, 50, 50]);
