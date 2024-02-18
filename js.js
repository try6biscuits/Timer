const userInput = document.getElementById("userInput");
const submitBtn = document.querySelector(".submitBtn");

let today = new Date();
let time = today.getHours(21) 
console.log(time)

submitBtn.addEventListener("click", function () {
  const inputValue = userInput.value;
  if (inputValue != NaN) {
    let results = time - inputValue;
    alert("You are " + results +  ' Hours from '  + time);
  }
});
