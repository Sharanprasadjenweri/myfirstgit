const button = document.getElementById("btn");
const countDisplay = document.getElementById("count");
let count = 0;

button.addEventListener("click", function (){
    count ++;
    countDisplay.textContent = count;
});