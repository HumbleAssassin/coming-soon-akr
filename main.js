let countDownDate = new Date("Jul 25, 2050 16:37:52").getTime();

function timerFunction() {
  let now = new Date().getTime();
  let timeRemaining = countDownDate - now;

  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  let daysText = document.querySelector(".day");
  let hoursText = document.querySelector(".hour");
  let minutesText = document.querySelector(".minute");
  let secondsText = document.querySelector(".second");

  daysText.innerHTML = days;
  hoursText.innerHTML = hours;
  minutesText.innerHTML = minutes;
  secondsText.innerHTML = seconds;
}

timerFunction();

setInterval(timerFunction, 1000);
console.log(countDownDate);
