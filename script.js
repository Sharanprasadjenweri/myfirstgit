const button = document.getElementById("btn");
const countDisplay = document.getElementById("count");
const resetButton = document.getElementById("Reset");

let count = 0;

button.addEventListener("click", function () {
    count++;
    countDisplay.textContent = count;
});

resetButton.addEventListener("click", function () {
    alert("Reset button Clicked");
    count = 0;
    countDisplay.textContent = count;
});
