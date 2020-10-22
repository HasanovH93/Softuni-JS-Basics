function onTimeForExam(input) {
  let examHours = Number(input[0]);
  let examMinutes = Number(input[1]);
  let arrivalHours = Number(input[2]);
  let arrivalMinutes = Number(input[3]);

  let timeExam = examHours * 60 + examMinutes;
  let arrivalTime = arrivalHours * 60 + arrivalMinutes;

  let time = Math.abs(arrivalTime - timeExam);
  let h = Math.floor(time / 60);
  let min = time % 60;

  if (timeExam < arrivalTime) {
    console.log("Late");
    if (time >= 60) {
      if (min < 10) {
        console.log(`${h}:0${min} hours after the start`);
      } else {
        console.log(`${h}:${min} hours after the start`);
      }
    } else {
      console.log(`${time} minutes after the start`);
    }
  } else if (time <= 30) {
    console.log("On time");

    if (time !== 0) {
      console.log(`${time} minutes before the start`);
    }
  } else {
    console.log("Early");

    if (time >= 60) {
      if (min < 10) {
        console.log(`${h}:0${min} hours before the start`);
      } else {
        console.log(`${h}:${min} hours before the start`);
      }
    } else {
      console.log(`${time} minutes before the start`);
    }
  }
}
onTimeForExam(["9", "30", "8", "29"]);
