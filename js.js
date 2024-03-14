const userInput = document.getElementById("userInput");
const submitBtn = document.querySelector(".submitBtn");
const twentyFourHourtBtn = document.querySelector(".twentyFourHourtBtn");
const twelveHourBtn = document.querySelector(".twelveHourBtn");

let today = new Date();
let hours = today.getHours(21);
let minutes = today.getMinutes(11);
let seconds = today.getSeconds(39);
let currentHour12 = hours % 12 || 12;


let = btn12HourClicked = false;
let = btn24HourClicked = false;

function ifClickedTwelveHourBtn() {
  submitBtn.addEventListener("click", function () {
    const inputValue = userInput.value;
    if (isNaN(inputValue) || inputValue === undefined) {
      alert("Enter a number");
    } else {
      if (inputValue == currentHour12) {
        alert(
          "You are 0 Hours away from " +
            currentHour12 +
            " So therefor its " +
            currentHour12
        );
      } else if (inputValue < currentHour12) {
        let results = inputValue - currentHour12 + 24;
        alert(
          "You are " +
            results +
            " Hours from " +
            inputValue +
            " so therefor your time is " +
            currentHour12
        );
      } else if (inputValue > currentHour12) {
        let results = inputValue - currentHour12;
        alert(
          "You are " +
            results +
            " Hours from " +
            inputValue +
            " so therefor your time is " +
            currentHour12
        );
      }
    }
  });
}
twelveHourBtn.addEventListener("click", ifClickedTwelveHourBtn);

function ifClickedTwentyFourHourBtn() {
  submitBtn.addEventListener("click", function () {
    const inputValue = userInput.value;
    if (isNaN(inputValue) || inputValue === undefined) {
      alert("Enter a number");
    } else {
      if (inputValue == hours) {
        alert(
          "You are 0 Hours away from " + hours + " So therefor its " + hours
        );
      } else if (inputValue < hours) {
        let results = inputValue - hours + 24;
        alert(
          "You are " +
            results +
            " Hours from " +
            inputValue +
            " so therefor your time is " +
            hours
        );
      } else if (inputValue > hours) {
        let results = inputValue - hours;
        alert(
          "You are " +
            results +
            " Hours from " +
            inputValue +
            " so therefor your time is " +
            hours
        );
      }
    }
  });
}
twentyFourHourtBtn.addEventListener("click", ifClickedTwentyFourHourBtn);

function checkBtn12HourClick () {
  btn12HourClicked = true
}

function btn24HourClicked() {
  btn24HourClicked = true
}

twelveHourBtn.addEventListener("click", checkBtn12HourClick);


twentyFourHourtBtn.addEventListener("click", btn24HourClicked);
