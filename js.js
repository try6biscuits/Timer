const userInput = document.getElementById("userInput");
const submitBtn = document.querySelector(".submitBtn");
const twentyFourHourtBtn = document.querySelector(".twentyFourHourtBtn");
const twelveHourBtn = document.querySelector(".twelveHourBtn");
let today = new Date();
let hours = today.getHours(21);
let minutes = today.getMinutes(11);
let seconds = today.getSeconds(39);

submitBtn.addEventListener("click", function () {
  const inputValue = userInput.value;
  if (isNaN(inputValue) || inputValue === undefined) {
    alert("Enter a number");
  } else {
    if (inputValue == hours) {
      alert("You are 0 Hours away from " + hours + " So therefor its " + hours);
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

function checkingIfClick() {
  twentyFourHourtBtn.onclick = function () {
    alert("Button Clicked");
  };
}
