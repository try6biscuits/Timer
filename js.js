const userInput = document.getElementById("userInput");
const submitBtn = document.querySelector(".submitBtn");

let today = new Date();
let time = today.getHours(21) + ":" + today.getMinutes(49) + ":" + today.getSeconds(0);
console.log(time)