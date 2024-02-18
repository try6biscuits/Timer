const userInput = document.getElementById("userInput");
const submitBtn = document.querySelector(".submitBtn");

let today = new Date();
let hours = today.getHours(21);
let minutes = today.getMinutes(11);
let seconds = today.getSeconds(39);

submitBtn.addEventListener("click", function () {
  const inputValue = userInput.value;
  if (inputValue != NaN) {
    let results = hours - inputValue;
    alert("You are " + results + " Hours from " + hours);
  }
});
